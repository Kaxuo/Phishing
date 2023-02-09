import { Component, Input, OnInit } from '@angular/core';
import { IMails } from 'src/app/interfaces/IMails';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  @Input() mails: IMails[];
  @Input() navigateToSpecificMail: (args: number) => void;
  constructor() {}

  ngOnInit(): void {}
}
