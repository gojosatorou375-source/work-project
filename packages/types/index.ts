export type Urgency = 'low' | 'medium' | 'high' | 'critical';

export type RequestStatus =
  | 'draft'
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'reschedule_proposed'
  | 'reschedule_confirmed'
  | 'completed'
  | 'cancelled';

export interface IntakeExtraction {
  problem: string;
  topic: string;
  urgency: Urgency;
  preferredTime: string | null;
  summary: string;
  confidence: number;
  clarificationQuestion: string | null;
}

export interface MentorshipRequest {
  id: string;
  clientName: string;
  rawMessage: string;
  extraction: IntakeExtraction;
  status: RequestStatus;
  createdAt: string;
}
