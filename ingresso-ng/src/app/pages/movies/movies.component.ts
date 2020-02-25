import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Filme[] = [
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 0, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 10, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 12, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 14, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 16, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 18, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 16, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 16, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 16, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 16, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 16, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 16, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
    new Filme(0, 'Sonic the Hedgehog', new Date(20, 2, 2019), 2019, 114, 'Ação', 'Um cara ai', 'Muitos caras ai', 'Um ouriço bem levado', 16, 'Portugues', 'Brasil', 5.4, 'https://blogtectoy.com.br/wp-content/uploads/2018/12/sonic-filme-poster_capa2.jpg', 'assets/images/sonic-banner.jpg', 'https://www.youtube.com/embed/szby7ZHLnkA'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
