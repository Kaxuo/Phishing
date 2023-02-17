import { IMail } from './IMail';

export interface ISession {
  username: string;
  mails: IMail[];
  score: number | null;
}
