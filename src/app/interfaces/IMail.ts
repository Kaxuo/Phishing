export interface IMail {
  id: number;
  sender: string;
  receiver: string;
  subject: string;
  content: string;
  read?: boolean;
  voted?: boolean;
  choice: boolean | null;
}
