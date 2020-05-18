import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/services/filme/filme.service';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  private routeSub: Subscription;
  private filme: Filme;
  private filmeId: number;

  constructor(
    private route: ActivatedRoute,
    private filmeService : FilmeService
  ) { }

  ngOnInit(
    
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      this.filmeId = params['id'];
    });
  }

  edit(filme: Filme) {

    this.filmeService.put(filme).subscribe((data: any) => {
     
    })
  }

}
