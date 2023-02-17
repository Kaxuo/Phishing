import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IMail } from 'src/app/interfaces/IMail';
import { ISession } from 'src/app/interfaces/ISession';
import { GlobalService } from 'src/app/services/global.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-confirmation-send',
  templateUrl: './confirmation-send.component.html',
  styleUrls: ['./confirmation-send.component.scss']
})
export class ConfirmationSendComponent {
  @Input() mails: IMail[];
  filteredMails: IMail[] = [];

  constructor(private storageService: LocalStorageService, private global: GlobalService, private scoreService: ScoresService, private router: Router) {}

  ngOnInit() {
    this.filteredMails = this.mails.filter((el) => el.voted);
  }

  cancel() {
    this.global.confirmation.next(false);
  }

  outsideClick(t: MouseEvent) {
    const target = t.target as HTMLElement;
    target.className == 'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 modal' && this.global.confirmation.next(false);
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
