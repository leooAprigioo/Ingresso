import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tipo_Ingresso } from 'src/app/models/tipo_ingresso';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from 'src/app/services/sala/sala.service';
import { TipoIngressoService } from 'src/app/services/tipo_ingresso/tipo-ingresso.service';

@Component({
  selector: 'app-edit-ticket-type',
  templateUrl: './edit-ticket-type.component.html',
  styleUrls: ['./edit-ticket-type.component.css']
})
export class EditTicketTypeComponent implements OnInit {

  @Input() editMode: boolean;
  @Output() submit = new EventEmitter();
  private ingressoID: number;
  private lista =true;
  private ingresso: Tipo_Ingresso[];
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute,
    private ingressoservice: TipoIngressoService,
    private router: Router) { }

  ngOnInit() {
    this.ingressoservice.list().subscribe(
      (data: Tipo_Ingresso[]) => {this.ingresso = data; console.log(this.ingresso)}
    )
  }

  editar(ingressoId){
    this.lista=false;
    this.ingressoID=ingressoId
  }

}