import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private router: Router, private global: GlobalService) {}

  logout() {
    localStorage.clear()
    this.router.navigate(['/']);
    this.global.logout.next(false);
  }

  cancel() {
    this.global.logout.next(false);
  }

  outsideClick(t: MouseEvent) {
    const target = t.target as HTMLElement;
    target.className == 'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0' && this.global.logout.next(false);
  }
}
