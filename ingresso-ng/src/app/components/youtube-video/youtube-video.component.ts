import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeVideoComponent implements OnInit {

  @Input() videoId: string;

  constructor(
    private sanitizer : DomSanitizer,

  ) { }

  ngOnInit() {
  }

  getTrailerUrl() {
    console.log(this.videoId);
    if (this.videoId) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId) 
    }
  }

}
