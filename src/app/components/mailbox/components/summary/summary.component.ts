import { Component, Input, OnInit } from '@angular/core';
import { IMails } from 'src/app/interfaces/IMails';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() mails: IMails[];
  @Input() navigateToSpecificMail: (args: number) => void;
  constructor() {}

  ngOnInit(): void {}
}
