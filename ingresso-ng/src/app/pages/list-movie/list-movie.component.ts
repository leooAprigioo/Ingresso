import { Component, OnInit } from '@angular/core';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FilmeService } from 'src/app/services/filme/filme.service';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  faTimes = faTimes;
  faEdit = faEdit;

  public filmes: Filme[];

  constructor(
    private filmeService : FilmeService
  ) { }

  ngOnInit() {
    this.filmeService.list().subscribe(
      (data: Filme[]) => {this.filmes = data; console.log(this.filmes)}
    )
  }

  delete(id: number) {
    this.filmeService.delete(id).subscribe(data => {
      console.log(data);
    })
  }

}
