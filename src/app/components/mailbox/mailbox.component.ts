import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMail } from 'src/app/interfaces/IMail';
import { MailsService } from 'src/app/services/mails.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {
  page: string;
  mails$: Observable<IMail[]>;
  routerActiveBackground = (query: string) => (query == this.page ? 'bg-indigo-600' : '');
  constructor(private mailsService: MailsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.mails$ = this.mailsService.getMails();
    this.route.queryParams.subscribe((queryParams) => (this.page = queryParams['page']));
  }

  navigateToSpecificMail(id: number) {
    this.router.navigate(['mailbox'], { queryParams: { page: 'mail', id: id, from: this.page } });
  }
}
