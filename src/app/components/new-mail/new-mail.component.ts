import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { MailsService } from 'src/app/services/mails.service';

@Component({
  selector: 'app-new-mail',
  templateUrl: './new-mail.component.html',
  styleUrls: ['./new-mail.component.scss']
})
export class NewMailComponent {
  mailForm: FormGroup;
  constructor(private fb: FormBuilder, private mailService: MailsService, private globalService: GlobalService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.mailForm = this.fb.group({
      sender: [''],
      receiver: [''],
      subject: [''],
      content: [''],
      phishing: [true]
    });
  }

  createFakeMail() {
    this.globalService.loading.next(true);
    this.mailService
      .createMail(this.mailForm.value)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);
        this.globalService.loading.next(false);
      });
  }
}
