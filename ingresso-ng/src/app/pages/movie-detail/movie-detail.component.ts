import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme/filme.service';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { SessaoService } from 'src/app/services/sessao/sessao.service';
import { Sessao } from 'src/app/models/sessao';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

  // public movie: Filme = new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'O filme segue as aventuras de Sonic enquanto ele tenta se adaptar à sua nova vida na Terra com seu recém-descoberto melhor amigo humano Tom Wachowski (James Marsden). Sonic e Tom unem forças para tentar impedir que o vilão Dr. Robotnik (Jim Carrey) capture Sonic e use seus poderes para dominar o mundo. Classificação indicativa Livre, contém violência.', 0, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA?controls=0&modestbranding=1');
  public movie: Filme;
  public sessions: Sessao[] = [];

  constructor(
    private sanitizer : DomSanitizer,
    private route: ActivatedRoute,
    private filmeService: FilmeService,
    private sessionService: SessaoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.filmeService.get(params['id']).subscribe((data: Filme) => {
        this.movie = data;
        this.loadSessions();
      });
      
    });
  }

  loadSessions() {
    this.sessionService.getByMovie(this.movie).subscribe((sessao: Sessao[]) => {
      this.sessions = sessao;
    });
  }

  getTrailerUrl() {
    if (this.movie) {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.movie.trailer_url) 
    }
  }



}
