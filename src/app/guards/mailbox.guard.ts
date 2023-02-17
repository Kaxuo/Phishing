import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MailboxGuard implements CanActivate {
  constructor(public router: Router, private storageService: LocalStorageService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const session = this.storageService.session$.getValue();
    if (session) {
      if (session.score == null) {
        return true;
      } else {
        this.router.navigate(['/results']);
        return false;
      }
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
