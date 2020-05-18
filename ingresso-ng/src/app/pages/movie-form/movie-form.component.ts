import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/app/services/filme/filme.service';
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() filmeId : number;
  @Output() submitForm = new EventEmitter<Filme>();

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private filmeService : FilmeService
  ) { }

  ngOnInit() {
    this.initializeForm();
    if (this.filmeId) {
      this.filmeService.get(this.filmeId).subscribe((data:Filme) => {
        this.populateForm(data);
      })
    } 
  }

  onSubmit() {
    this.submitForm.emit(this.formGroup.value as Filme);
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      id : [0, Validators.required],
      titulo : ['', Validators.required],
      data_lancamento : ['', Validators.required],
      ano : ['', Validators.required],
      duracao : ['', Validators.required],
      genero : ['', Validators.required],
      diretor : ['', Validators.required],
      atores : ['', Validators.required],
      sinopse : ['', Validators.required],
      classificacao : ['', Validators.required],
      em_cartaz : [false],
      idioma : [''],
      pais : [''],
      imdb : [''],
      poster : [''],
      banner : [''],
      trailer_url: [''],
    })
  }

  populateForm(filme: Filme) {
    this.formGroup.patchValue({
      id : filme.id,
      titulo : filme.titulo,
      data_lancamento : filme.data_lancamento,
      ano : filme.ano,
      duracao : filme.duracao,
      genero : filme.genero,
      diretor : filme.diretor,
      atores : filme.atores,
      sinopse : filme.sinopse,
      classificacao : filme.classificacao,
      em_cartaz : filme.em_cartaz,
      idioma : filme.idioma,
      pais : filme.pais,
      imdb : filme.imdb,
      // poster : filme.poster,
      // banner : filme.banner,
      trailer_url: filme.trailer_url
    });
  }

}
