import { Component, OnInit } from '@angular/core';
import { VIDEO_DATA } from '../video-data';

@Component({
  selector: 'app-tiktok-feed',
  templateUrl: './tiktok-feed.component.html',
  styleUrls: ['./tiktok-feed.component.scss']
})
export class TiktokFeedComponent implements OnInit {
  videos = VIDEO_DATA;

  constructor() {}

  ngOnInit(): void {
  }
}
