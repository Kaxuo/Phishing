import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISession } from '../interfaces/ISession';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public session$ = new BehaviorSubject<ISession | null>(null);

  constructor() {
    const gameSession = localStorage?.getItem('session');
    !!gameSession && this.session$.next(JSON.parse(gameSession));
  }

  setSession(value: ISession) {
    this.session$.next(value);
    localStorage.setItem('session', JSON.stringify(value));
  }

  getSession() {
    return this.session$.asObservable();
  }
}
