import { Component, Input, OnInit } from '@angular/core';
import { IMails } from 'src/app/interfaces/IMails';

@Component({
  selector: 'app-voted',
  templateUrl: './voted.component.html',
  styleUrls: ['./voted.component.scss']
})
export class VotedComponent implements OnInit {
  @Input() mails: IMails[];
  @Input() navigateToSpecificMail: (args: number) => void;
  constructor() {}

  ngOnInit(): void {}
}
