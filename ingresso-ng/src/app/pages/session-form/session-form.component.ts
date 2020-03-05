import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Sessao } from 'src/app/models/sessao';
import { Sala } from 'src/app/models/sala';
import { SalaService } from 'src/app/services/sala/sala.service';
import { SessaoService } from 'src/app/services/sessao/sessao.service';
import { FilmeService } from 'src/app/services/filme/filme.service';
import { Filme } from 'src/app/models/filme';
@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() salaId : number;
  @Output() submitForm = new EventEmitter<Sessao>();

  public formGroup: FormGroup;
  public salas : Sala[];
  public filmes: Filme[];

  constructor(
    private formBuilder: FormBuilder,
    private salaService: SalaService,
    private sessaoService: SessaoService,
    private filmeService : FilmeService,
    // private movieService : UsuarioService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.salaService.list().subscribe((data:Sala[]) => {
      this.salas = data;
      console.log(data)
    });

    this.filmeService.list().subscribe((data: Filme[]) => this.filmes = data);

    if (this.salaId) {
      this.sessaoService.get(this.salaId).subscribe((data: Sessao) => {
        this.populateForm(data);
      })
    } 
    console.log(this.salas);
  }

  onSubmit() {
    console.log(this.formGroup.value as Sessao);
    this.submitForm.emit(this.formGroup.value as Sessao);
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      id : [0, Validators.required],
      sala_id : [0, Validators.required],
      filme_id : [0, Validators.required],
      data_horario_inicio : ['', Validators.required],
      formato : [''],
      dublado : [1],
    })
  }

  populateForm(sessao: Sessao) {
    this.formGroup.setValue(sessao);
  }

}
