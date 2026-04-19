import { IntakeChat } from '@/components/intake-chat';

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Book Your Session</h1>
      <p className="mt-3 text-white/75">Submit your mentorship request. RATS will approve, reject, or suggest new slots.</p>
      <div className="mt-8">
        <IntakeChat />
      </div>
    </div>
  );
}
