import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMail } from '../interfaces/IMail';

@Injectable({
  providedIn: 'root'
})
export class MailsService {
  private mails: IMail[];
  constructor() {
    this.mails = fakeData;
  }

  getMails(): Observable<IMail[]> {
    return of(this.mails);
  }
}

export const fakeData = [
  {
    id: 1,
    sender: 'Kax',
    receiver: 'Bob',
    subject: 'Hello there',
    content: "It's been a while, how are you doing ?",
    read: false,
    fake: false,
    voted: false,
    choice: false
  },
  {
    id: 50,
    sender: 'Jin',
    receiver: 'Xiayou',
    subject: 'Are you free',
    content: 'I need to study',
    read: false,
    fake: true,
    voted: false,
    choice: true
  },
  {
    id: 63,
    sender: 'Bob',
    receiver: 'Bryan',
    subject: 'Gym',
    content: 'We should hit the gym, I wanna spare',
    read: true,
    fake: true,
    voted: false,
    choice: true
  },
  {
    id: 75,
    sender: 'Bryan',
    receiver: 'Hito',
    subject: 'App',
    content:
      'Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! ',
    read: false,
    fake: false,
    voted: true,
    choice: null
  },
  {
    id: 100,
    sender: 'Pixie',
    receiver: 'Ptera',
    subject: 'Key',
    content:
      'I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?I need the key to go through here, mind giving it to me ?',
    read: false,
    fake: false,
    voted: true,
    choice: null
  },
  {
    id: 85,
    sender: 'King',
    receiver: 'Junior',
    subject: 'Solo leveling',
    content:
      'Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! ',
    read: false,
    fake: false,
    voted: true,
    choice: null
  },
  {
    id: 99,
    sender: 'Quetz',
    receiver: 'Loki',
    subject: 'We will be king',
    content:
      'Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! ',
    read: false,
    fake: true,
    voted: false,
    choice: null
  },
  {
    id: 10,
    sender: 'Thor',
    receiver: 'Boum',
    subject: 'A very long subject shouldnt be allowed to be displayed',
    content:
      'Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! ',
    read: false,
    fake: false,
    voted: true,
    choice: true
  },
  {
    id: 58,
    sender: 'Hunter',
    receiver: 'Boomer',
    subject: 'Attendance',
    content:
      'Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! ',
    read: false,
    fake: true,
    voted: false,
    choice: false
  },
  {
    id: 11,
    sender: 'Kayn',
    receiver: 'Cecil',
    subject: 'HomeWork',
    content:
      'Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! ',
    read: true,
    fake: false,
    voted: false,
    choice: null
  },
  {
    id: 31,
    sender: 'Reree',
    receiver: 'Fre',
    subject: 'Deadline',
    content:
      'Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! ',
    read: false,
    fake: false,
    voted: false,
    choice: true
  },
  {
    id: 25,
    sender: 'Kage',
    receiver: 'Beatrix',
    subject: 'Fight me !',
    content:
      'Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! Did you try this app ? I saw it on my home and it looks so cool ! ',
    read: false,
    fake: true,
    voted: false,
    choice: false
  }
];
