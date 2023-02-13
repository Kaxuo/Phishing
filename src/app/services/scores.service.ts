import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IScore } from '../interfaces/IScores';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {
  private scores: IScore[];
  constructor() {
    this.scores = fakeData;
  }

  getScores(): Observable<IScore[]> {
    return of(this.scores);
  }
}

export const fakeData = [
  {
    id: 1,
    name: 'Bob',
    score: '20'
  },
  {
    id: 2,
    name: 'Jin',
    score: '30'
  },
  {
    id: 3,
    name: 'Xiayou',
    score: '75'
  },
  {
    id: 4,
    name: 'Bryan',
    score: '80'
  },
  {
    id: 5,
    name: 'King',
    score: '100'
  },
  {
    id: 6,
    name: 'Jaycee',
    score: '80'
  }
];
