import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MailboxComponent } from './components/mailbox/mailbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/mailbox/components/sidebar/sidebar.component';
import { InboxComponent } from './components/mailbox/components/inbox/inbox.component';
import { NotReadComponent } from './components/mailbox/components/not-read/not-read.component';
import { NotVotedComponent } from './components/mailbox/components/not-voted/not-voted.component';
import { VotedComponent } from './components/mailbox/components/voted/voted.component';
import { SummaryComponent } from './components/mailbox/components/summary/summary.component';
import { SpecificMailComponent } from './components/mailbox/components/specific-mail/specific-mail.component';
import { ResultsComponent } from './components/results/results.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/shared/modals/loading/loading.component';
import { ConfirmationSendComponent } from './components/shared/modals/confirmation-send/confirmation-send.component';
import { LogoutComponent } from './components/shared/modals/logout/logout.component';
import { ReadyModalComponent } from './components/shared/modals/ready/ready-modal.component';
import { NewMailComponent } from './components/new-mail/new-mail.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MailboxComponent,
    SidebarComponent,
    InboxComponent,
    NotReadComponent,
    NotVotedComponent,
    VotedComponent,
    SummaryComponent,
    SpecificMailComponent,
    ResultsComponent,
    LoadingComponent,
    ConfirmationSendComponent,
    LogoutComponent,
    ReadyModalComponent,
    NewMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    EditorModule
  ],
  providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
