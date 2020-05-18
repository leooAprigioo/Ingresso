import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme/filme.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(
    private filmeService: FilmeService
  ) { }

  ngOnInit() {
  }

  create(filme: Filme) {
    this.filmeService.post(filme).subscribe((data) =>
      false
    );
  }

}
