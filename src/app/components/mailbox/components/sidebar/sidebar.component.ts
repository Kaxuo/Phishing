import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, map, Subscription, take, timer } from 'rxjs';
import { faInbox, faEnvelope, faClipboardQuestion, faClipboardCheck, faCheckToSlot, faShare, faSignOut, faClock } from '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/services/global.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ScoresService } from 'src/app/services/scores.service';
import { ISession } from 'src/app/interfaces/ISession';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() routerActiveBackground: (args: string) => string;
  private subscriptions: Subscription;
  open$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  name: string;
  faInbox = faInbox;
  faEnvelope = faEnvelope;
  faClipboardQuestion = faClipboardQuestion;
  faClipboardCheck = faClipboardCheck;
  faCheckToSlot = faCheckToSlot;
  faShare = faShare;
  faSignOut = faSignOut;
  faClock = faClock;
  secondsLeft: number;
  constructor(private global: GlobalService, private storageService: LocalStorageService, private scoreService: ScoresService, private router: Router) {}

  ngOnInit(): void {
    const session = localStorage.getItem('session');
    if (session) this.name = JSON.parse(session)?.username;
    this.startCountdown();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  switchOpen() {
    this.open$.next(!this.open$.getValue());
  }

  confirmSend() {
    this.global.confirmation.next(true);
  }

  logout() {
    this.global.logout.next(true);
  }

  startCountdown() {
    const countdownSession = localStorage.getItem('timer') || 1500;
    const countdown$ = timer(0, 2000).pipe(
      take(+countdownSession),
      map((secondsElapsed) => +countdownSession - secondsElapsed)
    );
    this.subscriptions = countdown$.subscribe((secondsLeft) => {
      this.secondsLeft = secondsLeft;
      localStorage.setItem('timer', JSON.stringify(secondsLeft));
      this.secondsLeft == 1 && this.send();
    });
  }

  send() {
    this.global.loading.next(true);
    this.scoreService
      .sendMails(this.storageService.session$.getValue()!)
      .pipe(take(1))
      .subscribe({
        next: (response: ISession) => {
          const session = this.storageService.session$.getValue()!;
          session.score = response.score;
          this.storageService.setSession(session);
          this.router.navigate(['/results']);
          this.global.loading.next(false);
        },
        error: () => {
          this.global.loading.next(false);
        }
      });
  }
}
