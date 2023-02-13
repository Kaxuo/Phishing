import { Component, Input, OnInit } from '@angular/core';
import { IMail } from 'src/app/interfaces/IMail';
import { faSquare, faStar, faShareSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() mails: IMail[];
  @Input() navigateToSpecificMail: (args: number) => void;
  faSquare = faSquare;
  faStar = faStar;
  faShareSquare = faShareSquare;
  constructor() {}

  ngOnInit(): void {}
}
