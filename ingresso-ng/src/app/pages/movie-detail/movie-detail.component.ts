import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Filme = new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'O filme segue as aventuras de Sonic enquanto ele tenta se adaptar à sua nova vida na Terra com seu recém-descoberto melhor amigo humano Tom Wachowski (James Marsden). Sonic e Tom unem forças para tentar impedir que o vilão Dr. Robotnik (Jim Carrey) capture Sonic e use seus poderes para dominar o mundo. Classificação indicativa Livre, contém violência.', 0, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA?controls=0&modestbranding=1');

  constructor(
    private sanitizer : DomSanitizer
  ) { }

  ngOnInit() {
  }

  getTrailerUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer_url);
  }


}
