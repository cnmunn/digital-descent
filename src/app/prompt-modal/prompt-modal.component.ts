import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-prompt-modal',
  templateUrl: './prompt-modal.component.html',
  styleUrls: ['./prompt-modal.component.scss']
})
export class PromptModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
