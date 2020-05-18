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

  public SITE_KEY:string = '6Ld03PgUAAAAAD6oIp7Lyry4-kmEdW12adUp9vRU';

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
  }

  onSubmit() {
    this.submitForm.emit(this.formGroup.value as Usuario);
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      id : [0],
      nome : ['', Validators.required],
      data_nascimento : ['', Validators.required],
      senha : ['', [Validators.required, Validators.minLength(8)]],
      email : ['', [Validators.required, Validators.email]],
      cpf : [''],
      endereco : [''],
      admin : [false],
      recaptcha : ['', [Validators.required]]
    })
  }

  populateForm(usuario: Usuario) {
    this.formGroup.setValue(usuario);
  }

}
