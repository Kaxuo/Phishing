export interface IMails {
  id: number;
  sender: string;
  receiver: string;
  subject: string;
  content: string;
  fake: boolean;
  read?: boolean;
  voted?: boolean;
  choice: boolean | null;
}
