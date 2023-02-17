import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsGuard implements CanActivate {
  constructor(public router: Router, private storageService: LocalStorageService) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const session = this.storageService.session$.getValue();
    if (session) {
      if (session.score == null) {
        this.router.navigate(['/mailbox'], { queryParams: { page: 'inbox' } });
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
