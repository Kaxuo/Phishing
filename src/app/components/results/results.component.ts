import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IScore } from 'src/app/interfaces/IScores';
import { ScoresService } from 'src/app/services/scores.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  // 100 - 99/80 - 79/65 - 64/50 - 49/0
  perfect: AnimationOptions = {
    path: '/assets/lottie/perfect.json'
  };
  highScore: AnimationOptions = {
    path: '/assets/lottie/highscore.json'
  };
  star: AnimationOptions = {
    path: '/assets/lottie/star.json'
  };
  bronze: AnimationOptions = {
    path: '/assets/lottie/bronze.json'
  };
  failed: AnimationOptions = {
    path: '/assets/lottie/failed.json'
  };
  hiring: AnimationOptions = {
    path: '/assets/lottie/hiring.json'
  };
  scores$: Observable<IScore[]>;
  constructor(private scores: ScoresService) {}
  ngOnInit() {
    this.scores$ = this.scores.getScores();
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  goToBuSiCareerPage() {
    window.open('https://busi.eu/career/', '_blank');
  }
}
