import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISession } from 'src/app/interfaces/ISession';
import { GlobalService } from 'src/app/services/global.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {
  page: string;
  gameSession$: Observable<ISession | null>;
  routerActiveBackground = (query: string) => (query == this.page ? 'bg-indigo-600' : '');
  constructor(private route: ActivatedRoute, private router: Router, private storageService: LocalStorageService, public global: GlobalService) {}

  ngOnInit(): void {
    const session = this.storageService.session$.getValue();
    this.route.queryParams.subscribe((queryParams) => {
      this.page = queryParams['page'];
      if (queryParams['id']) {
        const index = session?.mails.findIndex((el) => el.id === queryParams['id']);
        if (!session!.mails[index!].read) {
          session!.mails[index!].read = true;
          this.storageService.setSession(session!);
        }
      }
    });
    this.gameSession$ = this.storageService.getSession();
  }

  navigateToSpecificMail(id: number) {
    this.router.navigate(['mailbox'], { queryParams: { page: 'mail', id: id, from: this.page } });
  }

  removeHtml(text: string) {
    return text?.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '');
  }
}
