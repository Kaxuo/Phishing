import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MailboxComponent } from './components/mailbox/mailbox.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent, LandingPageComponent, MailboxComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, LottieModule.forRoot({ player: playerFactory })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
