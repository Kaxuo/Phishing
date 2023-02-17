import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { ResultsComponent } from './components/results/results.component';
import { MailboxGuard } from './guards/mailbox.guard';
import { ResultsGuard } from './guards/results.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'mailbox', component: MailboxComponent, canActivate: [MailboxGuard] },
  { path: 'results', component: ResultsComponent, canActivate: [ResultsGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
