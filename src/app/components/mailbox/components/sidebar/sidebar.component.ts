import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { faInbox, faEnvelope, faClipboardQuestion, faClipboardCheck, faCheckToSlot, faShare, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() routerActiveBackground: (args: string) => string;
  open$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  name: string;
  faInbox = faInbox;
  faEnvelope = faEnvelope;
  faClipboardQuestion = faClipboardQuestion;
  faClipboardCheck = faClipboardCheck;
  faCheckToSlot = faCheckToSlot;
  faShare = faShare;
  faSignOut = faSignOut;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const session = localStorage.getItem('session');
    if (session) this.name = JSON.parse(session)?.name;
  }

  switchOpen() {
    this.open$.next(!this.open$.getValue());
  }

  logout() {
    localStorage.removeItem('session');
    this.router.navigate(['/']);
  }
}
