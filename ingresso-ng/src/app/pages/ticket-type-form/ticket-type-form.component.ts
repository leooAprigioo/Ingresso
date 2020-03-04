import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tipo_Ingresso } from 'src/app/models/tipo_ingresso';

@Component({
  selector: 'app-ticket-type-form',
  templateUrl: './ticket-type-form.component.html',
  styleUrls: ['./ticket-type-form.component.css']
})
export class TicketTypeFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() movieId : number;
  @Output() submitForm = new EventEmitter<Tipo_Ingresso>();

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
    console.log(this.formGroup.value as Tipo_Ingresso);
    this.submitForm.emit(this.formGroup.value as Tipo_Ingresso);
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      id : ['', Validators.required],
      nome : ['', Validators.required],
      preco : ['', Validators.required],
      observacao : ['']
    })
  }

  populateForm(tipo_ingresso: Tipo_Ingresso) {
    this.formGroup.setValue(tipo_ingresso);
  }

}
