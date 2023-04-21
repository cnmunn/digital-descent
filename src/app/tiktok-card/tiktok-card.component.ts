import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromptModalComponent } from '../prompt-modal/prompt-modal.component';

@Component({
  selector: 'app-tiktok-card',
  templateUrl: './tiktok-card.component.html',
  styleUrls: ['./tiktok-card.component.scss']
})

export class TiktokCardComponent implements OnInit {
  @Input() video: any;
  isTextVisible = true;
  allContentVisible = true;

  constructor(public dialog: MatDialog) {}

  toggleTextVisibility(): void {
    this.isTextVisible = !this.isTextVisible;
  }

  formatContent(content: string): string {
    return content.replace(/\n/g, '<br>');
  }

  openTextModal(): void {
    this.dialog.open(PromptModalComponent, {
      data: {
        promptText: this.video.promptText
      }
    });
  }
  toggleAllContentVisible(): void{
    this.allContentVisible = !this.allContentVisible;
  }
  
  ngOnInit(): void {}
}
