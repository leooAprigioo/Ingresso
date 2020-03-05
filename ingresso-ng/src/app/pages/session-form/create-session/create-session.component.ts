import { Component, OnInit } from '@angular/core';
import { Sessao } from 'src/app/models/sessao';
import { SessaoService } from 'src/app/services/sessao/sessao.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(
    private sessaoService: SessaoService
  ) { }

  ngOnInit() {
  }

  create(sessao: Sessao) {
    this.sessaoService.post(sessao).subscribe((data) =>
      console.log(data)
    );
  }

}
