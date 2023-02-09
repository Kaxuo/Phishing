import { Component, Input, OnInit } from '@angular/core';
import { IMails } from 'src/app/interfaces/IMails';

@Component({
  selector: 'app-not-voted',
  templateUrl: './not-voted.component.html',
  styleUrls: ['./not-voted.component.scss']
})
export class NotVotedComponent implements OnInit {
  @Input() mails: IMails[];
  @Input() navigateToSpecificMail: (args: number) => void;
  constructor() { }

  ngOnInit(): void {
  }

}
