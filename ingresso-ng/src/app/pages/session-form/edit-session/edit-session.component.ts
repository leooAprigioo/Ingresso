import { Component, OnInit } from '@angular/core';
import { SalaService } from 'src/app/services/sala/sala.service';
import { Sessao } from 'src/app/models/sessao';
import { SessaoService } from 'src/app/services/sessao/sessao.service';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {
  private sessao: Sessao[];
  private lista =true;
  public sessaoID:any;
  constructor(  private sessaoSerivce: SessaoService,) { }

  ngOnInit() {
    this.sessaoSerivce.list().subscribe(
      (data: Sessao[]) => {this.sessao = data; console.log(this.sessao)}
    )
  }

  editar(sessaoId){
    this.lista=false;
    this.sessaoID=sessaoId
  }

}
