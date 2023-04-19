import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TiktokFeedComponent } from './tiktok-feed/tiktok-feed.component';
import { TiktokCardComponent } from './tiktok-card/tiktok-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TiktokFeedComponent,
    TiktokCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
