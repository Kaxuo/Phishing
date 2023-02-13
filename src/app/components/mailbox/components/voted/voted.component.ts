import { Component, Input, OnInit } from '@angular/core';
import { IMail } from 'src/app/interfaces/IMail';
import { faSquare, faStar, faShareSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-voted',
  templateUrl: './voted.component.html',
  styleUrls: ['./voted.component.scss']
})
export class VotedComponent implements OnInit {
  @Input() mails: IMail[];
  @Input() navigateToSpecificMail: (args: number) => void;
  faSquare = faSquare;
  faStar = faStar;
  faShareSquare = faShareSquare;
  constructor() {}

  ngOnInit(): void {}
}
