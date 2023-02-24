import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IScore } from '../interfaces/IScores';
import { ISession } from '../interfaces/ISession';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {
  private URL: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  sendMails(session: ISession): Observable<ISession> {
    return this.http.post<ISession>(`${this.URL}/sessions`, session);
  }

  getScores(): Observable<IScore[]> {
    return this.http.get<IScore[]>(`${this.URL}/sessions`);
  }
}
