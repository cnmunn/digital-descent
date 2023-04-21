import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TiktokFeedComponent } from './tiktok-feed/tiktok-feed.component';
import { TiktokCardComponent } from './tiktok-card/tiktok-card.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { PromptModalComponent } from './prompt-modal/prompt-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TiktokFeedComponent,
    TiktokCardComponent,
    PromptModalComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
