import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/recieving-mail.json'
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(25)]]
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  startGame() {
    this.router.navigate(['mailbox'], { queryParams: { page: 'inbox' } });
  }
}
