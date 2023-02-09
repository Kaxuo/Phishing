import { Component, Input, OnInit } from '@angular/core';
import { IMails } from 'src/app/interfaces/IMails';

@Component({
  selector: 'app-not-read',
  templateUrl: './not-read.component.html',
  styleUrls: ['./not-read.component.scss']
})
export class NotReadComponent implements OnInit {
  @Input() mails: IMails[];
  @Input() navigateToSpecificMail: (args: number) => void;
  constructor() {}

  ngOnInit(): void {}
}
