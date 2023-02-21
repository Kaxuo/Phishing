import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IScore } from 'src/app/interfaces/IScores';
import { ScoresService } from 'src/app/services/scores.service';
import { AnimationOptions } from 'ngx-lottie';
import { ISession } from 'src/app/interfaces/ISession';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  session: ISession;
  score: number;
  animation: AnimationOptions;
  text: string;
  hiring: AnimationOptions = {
    path: '/assets/lottie/hiring.json'
  };
  scores$: Observable<IScore[]>;
  constructor(private scores: ScoresService, private storageService: LocalStorageService) {}
  ngOnInit() {
    this.session = this.storageService.session$.getValue()!;
    this.scores$ = this.scores.getScores().pipe(
      map((sessions) => {
        const finalValue = sessions.map((session) => {
          const score = (session.score / this.session.mails.length) * 100;
          return { ...session, score: Math.round(score) };
        });
        finalValue.sort((a, b) => b.score - a.score);
        return finalValue;
      })
    );
    this.score = Math.round((this.session.score! / this.session.mails.length) * 100);
    switch (true) {
      case this.score == 100:
        this.animation = {
          path: '/assets/lottie/perfect.json'
        };
        this.text = "Amazing ! it's impossible to scam you ! We know for sure that you won't waste any money";
        break;
      case this.score < 100 && this.score >= 80:
        this.animation = {
          path: '/assets/lottie/highscore.json'
        };
        this.text = 'Awesome ! Pretty good score, scamming you looks pretty hard , what a keen eye !';
        break;
      case this.score < 80 && this.score >= 65:
        this.animation = {
          path: '/assets/lottie/star.json'
        };
        this.text = "Cool ! It's a good score, scamming you is tough ! glad you're so careful !";
        break;
      case this.score < 65 && this.score >= 50:
        this.animation = {
          path: '/assets/lottie/bronze.json'
        };
        this.text = "It's okay ! You're pretty careful but feel free to take your time to check your emails !";
        break;
      case this.score < 50:
        this.animation = {
          path: '/assets/lottie/failed.json'
        };
        this.text = 'Careful there ! Always take your time when a website asks you for your information.';
        break;
      default:
        this.animation = {
          path: '/assets/lottie/failed.json'
        };
        this.text = 'Error , Score not computed ! ';
      // code block
    }
  }

  onAnimate(): void {}

  goToBuSiCareerPage() {
    window.open('https://busi.eu/career/', '_blank');
  }
}
