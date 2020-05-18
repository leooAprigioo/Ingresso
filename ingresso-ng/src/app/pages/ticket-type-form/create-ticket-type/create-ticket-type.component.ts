import { Component, OnInit } from '@angular/core';
import { TipoIngressoService} from 'src/app/services/tipo_ingresso/tipo-ingresso.service';
import { Tipo_Ingresso } from 'src/app/models/tipo_ingresso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket-type',
  templateUrl: './create-ticket-type.component.html',
  styleUrls: ['./create-ticket-type.component.css']
})
export class CreateTicketTypeComponent implements OnInit {

  constructor( private ingressoService: TipoIngressoService,
    private router: Router) { }

  ngOnInit() {
  }
  create(ingresso: Tipo_Ingresso) {
    this.ingressoService.post(ingresso).subscribe((data) =>
      false
    
    );this.router.navigate(['/'])
    
  }

}
