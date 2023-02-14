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
    score: '45'
  },
  {
    id: 6,
    name: 'Kain',
    score: '82'
  },
  {
    id: 7,
    name: 'Cecil',
    score: '12'
  },
  {
    id: 8,
    name: 'Luna',
    score: '50'
  },
  {
    id: 9,
    name: 'Armor',
    score: '68'
  },
  {
    id: 10,
    name: 'Law',
    score: '70'
  },
  {
    id: 11,
    name: 'Claire',
    score: '38'
  }
];
