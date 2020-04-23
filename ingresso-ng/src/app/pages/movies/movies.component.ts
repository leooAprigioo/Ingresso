import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme/filme.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  releasedMovies: Filme[] = [];
  moviesToRelease: Filme[] = [];

  constructor(
    private filmeService : FilmeService,
  ) { }

  ngOnInit() {
    this.filmeService.listMoviesToRelease().subscribe((data: Filme[]) => this.moviesToRelease = data);
    this.filmeService.listReleasedMovies().subscribe((data:Filme[]) => this.releasedMovies = data);
  }

}
