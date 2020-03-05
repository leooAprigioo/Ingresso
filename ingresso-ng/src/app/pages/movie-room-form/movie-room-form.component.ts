import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { Sala } from 'src/app/models/sala';

import { FormBuilder, FormGroup} from '@angular/forms';
import { SalaService } from 'src/app/services/sala/sala.service';

@Component({
  selector: 'app-movie-room-form',
  templateUrl: './movie-room-form.component.html',
  styleUrls: ['./movie-room-form.component.css']
})
export class MovieRoomFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() salaId : number;
  @Output() submitForm = new EventEmitter<Sala>();

  public formGroup: FormGroup;
  public sala: Sala;

  constructor(
    private formBuilder: FormBuilder,
    private salaService : SalaService
  ) { }

  ngOnInit() {
    this.initializeForm();
    if (this.salaId) {
       this.salaService.get(this.salaId).subscribe((data:Sala) => {
        this.sala=data;
        data.tipo_sala='10';
        this.populateForm(data);
       })
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
      tipo_sala : ['',Validators.required]
    })
  }

  populateForm(sala: Sala) {
    this.formGroup.setValue(sala);
  }
  delete(id: number) {
    this.salaService.delete(this.sala.id).subscribe(data => {
      console.log(data);
      window.location.reload(true);
    })
  }

  update() {
    console.log(this.sala)
    this.salaService.put(this.formGroup.value).subscribe(data => {
      console.log(data);
      window.location.reload(true);
    })
  }

}
