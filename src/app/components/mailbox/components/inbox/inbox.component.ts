import { Component, Input, OnInit } from '@angular/core';
import { IMail } from 'src/app/interfaces/IMail';
import { faSquare, faStar, faShareSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  @Input() mails: IMail[];
  @Input() navigateToSpecificMail: (args: number) => void;
  @Input() removeHtml: (args: string) => string;
  faSquare = faSquare;
  faStar = faStar;
  faShareSquare = faShareSquare;
  constructor() {}

  ngOnInit(): void {}
}
