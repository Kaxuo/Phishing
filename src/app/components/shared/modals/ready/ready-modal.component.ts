import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ready-modal',
  templateUrl: './ready-modal.component.html',
  styleUrls: ['./ready-modal.component.scss']
})
export class ReadyModalComponent {
  @Input() outsideClick: (t: MouseEvent) => void;
  @Input() readyFlag: () => void;
  @Input() startGame: () => void;
}
