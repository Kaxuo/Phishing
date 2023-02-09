import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { faInbox, faEnvelope, faClipboardQuestion, faClipboardCheck, faCheckToSlot, faShare, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() routerActiveBackground: (args: string) => string;
  open$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  faInbox = faInbox;
  faEnvelope = faEnvelope;
  faClipboardQuestion = faClipboardQuestion;
  faClipboardCheck = faClipboardCheck;
  faCheckToSlot = faCheckToSlot;
  faShare = faShare;
  faSignOut = faSignOut;
  constructor() {}

  ngOnInit(): void {}

  switchOpen() {
    this.open$.next(!this.open$.getValue());
  }
}
