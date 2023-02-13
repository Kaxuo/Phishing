import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IScore } from 'src/app/interfaces/IScores';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  scores$: Observable<IScore[]>;
  constructor(private scores: ScoresService) {}
  ngOnInit() {
    this.scores$ = this.scores.getScores().pipe(tap((el) => console.log(el)));
  }
}
