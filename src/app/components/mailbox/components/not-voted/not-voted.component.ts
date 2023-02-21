import { Component, Input, OnInit } from '@angular/core';
import { IMail } from 'src/app/interfaces/IMail';
import { faSquare, faStar, faShareSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-not-voted',
  templateUrl: './not-voted.component.html',
  styleUrls: ['./not-voted.component.scss']
})
export class NotVotedComponent implements OnInit {
  @Input() mails: IMail[];
  @Input() navigateToSpecificMail: (args: number) => void;
  @Input() removeHtml: (args: string) => string;
  faSquare = faSquare;
  faStar = faStar;
  faShareSquare = faShareSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
