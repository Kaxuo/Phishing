import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'mailbox', component: MailboxComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
