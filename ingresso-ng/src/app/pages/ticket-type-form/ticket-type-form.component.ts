import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tipo_Ingresso } from 'src/app/models/tipo_ingresso';
import { TipoIngressoService } from 'src/app/services/tipo_ingresso/tipo-ingresso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-type-form',
  templateUrl: './ticket-type-form.component.html',
  styleUrls: ['./ticket-type-form.component.css']
})
export class TicketTypeFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() movieId : number;
  @Input() ingressoId:number;
  @Output() submitForm = new EventEmitter<Tipo_Ingresso>();

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ingressoService : TipoIngressoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeForm();
    console.log(this.ingressoId)
    if (this.ingressoId) {
       this.ingressoService.get(this.ingressoId).subscribe((data:Tipo_Ingresso) => {
         this.populateForm(data);
       })
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

  delete() {
    this.ingressoService.delete(this.ingressoId).subscribe(data => {
      window.location.reload(true);
      console.log(data);
    })
  }

  update() {
    this.ingressoService.put(this.formGroup.value).subscribe(data => {
      this.ingressoId=null;
      window.location.reload(true);
      
    
      
      console.log(data);
    })
    
  }
 
  
}
