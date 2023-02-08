import { Component, OnInit } from '@angular/core';
import { faInbox, faEnvelope, faClipboardQuestion, faClipboardCheck, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {
  open$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  faInbox = faInbox;
  faEnvelope = faEnvelope;
  faClipboardQuestion = faClipboardQuestion;
  faClipboardCheck = faClipboardCheck;
  faCheckToSlot = faCheckToSlot;
  constructor() {}

  ngOnInit(): void {}

  switchOpen() {
    this.open$.next(!this.open$.getValue());
    console.log(this.open$.getValue());
  }
}
