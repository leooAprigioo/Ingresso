import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/models/sala';
import { SalaService } from 'src/app/services/sala/sala.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie-room',
  templateUrl: './create-movie-room.component.html',
  styleUrls: ['./create-movie-room.component.css']
})
export class CreateMovieRoomComponent implements OnInit {

  constructor(
    private salaService: SalaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(sala: Sala) {
    this.salaService.post(sala).subscribe((data) =>
      false
    );  this.router.navigate(['/'])
  }

}
