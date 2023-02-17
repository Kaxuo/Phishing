import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public confirmation: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public logout: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}
}
