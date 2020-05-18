import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from 'src/app/services/sala/sala.service';
import { Sala } from 'src/app/models/sala';

@Component({
  selector: 'app-edit-movie-room',
  templateUrl: './edit-movie-room.component.html',
  styleUrls: ['./edit-movie-room.component.css']
})
export class EditMovieRoomComponent implements OnInit {

  @Input() editMode: boolean;
  @Output() submit = new EventEmitter();
  private salaID: number;
  private lista =true;
  private sala: Sala[];
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute,
    private salaSerive: SalaService,
    private router: Router) { }

  ngOnInit() {
    this.salaSerive.list().subscribe(
      (data: Sala[]) => {this.sala = data;}
    )
  }

  editar(salaId){
    this.lista=false;
    this.salaID=salaId
  }

}
