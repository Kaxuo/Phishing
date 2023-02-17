import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailsService } from 'src/app/services/mails.service';
import { take } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ISession } from 'src/app/interfaces/ISession';
import { IMail } from 'src/app/interfaces/IMail';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/recieving-mail.json'
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(25)]]
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mailsService: MailsService,
    private storageService: LocalStorageService,
    private global: GlobalService
  ) {}

  ngOnInit(): void {
    const session = localStorage.getItem('session');
    session && this.router.navigate(['mailbox'], { queryParams: { page: 'inbox' } });
  }

  onAnimate(): void {}

  startGame() {
    this.global.loading.next(true);
    this.mailsService
      .getMails()
      .pipe(take(1))
      .subscribe({
        next: (mails) => {
          const gameMails: IMail[] = mails.map((el) => {
            return { ...el, read: false, voted: false, phishing: null };
          });
          const session: ISession = {
            username: this.form.controls['name'].value,
            mails: gameMails,
            score: null
          };
          this.storageService.setSession(session);
          this.router.navigate(['mailbox'], { queryParams: { page: 'inbox' } });
          this.global.loading.next(false);
        },
        error: () => {
          this.global.loading.next(false);
        }
      });
  }
}
