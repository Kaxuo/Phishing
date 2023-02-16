import { IMail } from './IMail';

export interface ISession {
  name: string;
  mails: IMail[];
  score: string | null;
}
