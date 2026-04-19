import type { IntakeExtraction, MentorshipRequest, RequestStatus } from '@types/index';

const requests: MentorshipRequest[] = [];

function inferUrgency(text: string): IntakeExtraction['urgency'] {
  const value = text.toLowerCase();
  if (value.includes('critical') || value.includes('urgent')) return 'critical';
  if (value.includes('high') || value.includes('asap')) return 'high';
  if (value.includes('soon')) return 'medium';
  return 'low';
}

export function extractFromMessage(rawMessage: string): IntakeExtraction {
  const firstSentence = rawMessage.split(/[.!?]/)[0] ?? rawMessage;
  return {
    problem: firstSentence.slice(0, 180),
    topic: rawMessage.includes('team') ? 'Team Performance' : 'Founder Performance',
    urgency: inferUrgency(rawMessage),
    preferredTime: null,
    summary: rawMessage.slice(0, 200),
    confidence: 0.78,
    clarificationQuestion: null
  };
}

export function createRequest(clientName: string, rawMessage: string): MentorshipRequest {
  const item: MentorshipRequest = {
    id: crypto.randomUUID(),
    clientName,
    rawMessage,
    extraction: extractFromMessage(rawMessage),
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  requests.unshift(item);
  return item;
}

export function listRequests(status?: RequestStatus) {
  if (!status) return requests;
  return requests.filter((request) => request.status === status);
}

export function updateRequestStatus(id: string, status: RequestStatus) {
  const request = requests.find((item) => item.id === id);
  if (!request) return null;
  request.status = status;
  return request;
}
