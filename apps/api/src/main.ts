import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { z } from 'zod';

const app = express();
app.use(cors());
app.use(express.json());

const RequestSchema = z.object({
  clientName: z.string().min(1),
  message: z.string().min(80)
});

type Status = 'pending' | 'approved' | 'rejected' | 'reschedule_proposed';

const requests: Array<{ id: string; clientName: string; message: string; status: Status; createdAt: string }> = [];

const server = createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'sisu-api' });
});

app.get('/requests', (_req, res) => {
  res.json({ requests });
});

app.post('/chat/intake', (req, res) => {
  const parsed = RequestSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const request = {
    id: crypto.randomUUID(),
    clientName: parsed.data.clientName,
    message: parsed.data.message,
    status: 'pending' as const,
    createdAt: new Date().toISOString()
  };

  requests.unshift(request);
  io.emit('request.created', request);
  return res.status(201).json({ request });
});

app.patch('/requests/:id/:action', (req, res) => {
  const item = requests.find((entry) => entry.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });

  const actionMap: Record<string, Status> = {
    approve: 'approved',
    reject: 'rejected',
    reschedule: 'reschedule_proposed'
  };

  const nextStatus = actionMap[req.params.action];
  if (!nextStatus) return res.status(400).json({ error: 'Invalid action' });

  item.status = nextStatus;
  io.emit('request.updated', item);
  return res.json({ request: item });
});

const PORT = Number(process.env.PORT ?? 4000);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SISU API listening on :${PORT}`);
});
