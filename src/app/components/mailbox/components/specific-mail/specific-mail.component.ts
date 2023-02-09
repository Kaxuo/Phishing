import { Component, Input, OnInit } from '@angular/core';
import { IMails } from 'src/app/interfaces/IMails';
import {
  faArrowLeft,
  faEnvelope,
  faBoxArchive,
  faTrash,
  faClock,
  faEllipsisVertical,
  faChevronLeft,
  faChevronRight,
  faPrint,
  faSquareArrowUpRight,
  faStar,
  faReply
} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-specific-mail',
  templateUrl: './specific-mail.component.html',
  styleUrls: ['./specific-mail.component.scss']
})
export class SpecificMailComponent implements OnInit {
  @Input() mails: IMails[];
  mail: IMails | undefined;
  id: number;
  index: number;
  faArrowLeft = faArrowLeft;
  faEnvelope = faEnvelope;
  faBoxArchive = faBoxArchive;
  faTrash = faTrash;
  faClock = faClock;
  faEllipsisVertical = faEllipsisVertical;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPrint = faPrint;
  faSquareArrowUpRight = faSquareArrowUpRight;
  faStar = faStar;
  faReply = faReply;
  constructor(private location: Location, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.index = this.mails.findIndex((el) => el.id == this.route.snapshot.queryParams['id']);
    this.mail = this.mails.find((el) => el.id == this.route.snapshot.queryParams['id']);
  }

  goBack() {
    this.router.navigate(['mailbox'], { queryParams: { page: this.route.snapshot.queryParams['from'] } });
  }

  previousMail() {
    const currentIndex = this.mails.findIndex((el) => el.id == this.route.snapshot.queryParams['id']);
    const nextIndex = (currentIndex - 1) % this.mails.length;
    this.router.navigate(['mailbox'], { queryParams: { page: 'mail', id: this.mails[nextIndex].id, from: this.route.snapshot.queryParams['from'] } });
    this.index = this.mails.findIndex((el) => el.id == this.mails[nextIndex].id);
    this.mail = this.mails.find((el) => el.id == this.mails[nextIndex].id);
  }

  nextMail() {
    const currentIndex = this.mails.findIndex((el) => el.id == this.route.snapshot.queryParams['id']);
    const nextIndex = (currentIndex + 1) % this.mails.length;
    this.router.navigate(['mailbox'], { queryParams: { page: 'mail', id: this.mails[nextIndex].id, from: this.route.snapshot.queryParams['from'] } });
    this.index = this.mails.findIndex((el) => el.id == this.mails[nextIndex].id);
    this.mail = this.mails.find((el) => el.id == this.mails[nextIndex].id);
  }
}
