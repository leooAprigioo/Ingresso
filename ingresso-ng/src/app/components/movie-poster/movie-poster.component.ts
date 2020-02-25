import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { faArrowCircleRight, faPlay} from '@fortawesome/free-solid-svg-icons';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent implements OnInit {

  faArrowCircleRight = faArrowCircleRight;
  faPlay = faPlay;

  @Input() movie: Filme;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  getTrailerUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer_url);
  }

}
