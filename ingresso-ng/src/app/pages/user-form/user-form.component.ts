import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from '../../models/usuario'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() usuarioId : number;
  @Output() submitForm = new EventEmitter<Usuario>();

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService : UsuarioService
  ) { }

  ngOnInit() {
    this.initializeForm();
    if (this.usuarioId) {
      this.usuarioService.get(this.usuarioId).subscribe((data:Usuario) => {
        this.populateForm(data);
      })
    } 
    console.log(this.formGroup);
  }

  onSubmit() {
    console.log(this.formGroup.value as Usuario);
    this.submitForm.emit(this.formGroup.value as Usuario);
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      id : [''],
      nome : ['', Validators.required],
      dataNascimento : ['', Validators.required],
      senha : ['', [Validators.required, Validators.minLength(8)]],
      email : ['', [Validators.required, Validators.email]],
      cpf : [''],
      endereco : [''],
      admin : ['']
    })
  }

  populateForm(usuario: Usuario) {
    this.formGroup.setValue(usuario);
  }

}
