import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoComponent } from './youtube-video.component';



@NgModule({
  declarations: [YoutubeVideoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    YoutubeVideoComponent
  ]
})
export class YoutubeVideoModule { }
