import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tiktok-card',
  templateUrl: './tiktok-card.component.html',
  styleUrls: ['./tiktok-card.component.scss']
})
export class TiktokCardComponent {
  @Input() video: any;
}
