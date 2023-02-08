import { Component, OnInit } from '@angular/core';
import { faInbox, faEnvelope, faClipboardQuestion, faClipboardCheck, faCheckToSlot} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {
  faInbox = faInbox;
  faEnvelope = faEnvelope;
  faClipboardQuestion = faClipboardQuestion;
  faClipboardCheck = faClipboardCheck;
  faCheckToSlot = faCheckToSlot;
  constructor() {}

  ngOnInit(): void {}
}
