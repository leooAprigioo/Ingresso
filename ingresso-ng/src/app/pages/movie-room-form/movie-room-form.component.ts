import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { Sala } from 'src/app/models/sala';

import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movie-room-form',
  templateUrl: './movie-room-form.component.html',
  styleUrls: ['./movie-room-form.component.css']
})
export class MovieRoomFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() movieId : number;
  @Output() submitForm = new EventEmitter<Sala>();

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private movieService : UsuarioService
  ) { }

  ngOnInit() {
    this.initializeForm();
    if (this.movieId) {
      // this.movieService.get(this.movieId).subscribe((data:Usuario) => {
      //   this.populateForm(data);
      // })
    } 
    console.log(this.formGroup);
  }

  onSubmit() {
    console.log(this.formGroup.value as Sala);
    this.submitForm.emit(this.formGroup.value as Sala);
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      id : ['', Validators.required],
      nome : ['', Validators.required],
      quantidade_fileira : ['', Validators.required],
      quantidade_assento : ['', Validators.required],
      tipo_sala : ['']
    })
  }

  populateForm(sala: Sala) {
    this.formGroup.setValue(sala);
  }

}
