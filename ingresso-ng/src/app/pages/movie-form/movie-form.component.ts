import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Filme } from 'src/app/models/filme';
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() movieId : number;
  @Output() submitForm = new EventEmitter<Filme>();

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
    console.log(this.formGroup.value as Filme);
    this.submitForm.emit(this.formGroup.value as Filme);
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      id : ['', Validators.required],
      titulo : ['', Validators.required],
      data_lancamento : ['', Validators.required],
      ano : ['', Validators.required],
      duracao : ['', Validators.required],
      genero : ['', Validators.required],
      diretor : ['', Validators.required],
      atores : ['', Validators.required],
      sinopse : ['', Validators.required],
      classificacao : ['', Validators.required],
      em_cartaz : [''],
      idioma : [''],
      pais : [''],
      imdb : [''],
      poster : [''],
      banner : [''],
      trailer_url: [''],
    })
  }

  populateForm(movie: Filme) {
    this.formGroup.setValue(movie);
  }

}
