import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Sessao } from 'src/app/models/sessao';
@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() movieId : number;
  @Output() submitForm = new EventEmitter<Sessao>();

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
    console.log(this.formGroup.value as Sessao);
    this.submitForm.emit(this.formGroup.value as Sessao);
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      id : ['', Validators.required],
      sala_id : ['', Validators.required],
      filme_id : ['', Validators.required],
      data_horario_inicio : ['', Validators.required],
      formato : [''],
      dublado : [''],
    })
  }

  populateForm(sessao: Sessao) {
    this.formGroup.setValue(sessao);
  }

}
