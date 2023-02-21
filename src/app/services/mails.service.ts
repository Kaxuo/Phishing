import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMail } from '../interfaces/IMail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailsService {
  private URL: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getMails(): Observable<IMail[]> {
    return this.http.get<IMail[]>(`${this.URL}/mails`);
  }

  createMail(fakeMail: IMail): Observable<IMail> {
    return this.http.post<IMail>(`${this.URL}/mails`, fakeMail);
  }
}
