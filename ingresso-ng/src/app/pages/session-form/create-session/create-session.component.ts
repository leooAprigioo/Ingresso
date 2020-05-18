import { Component, OnInit } from '@angular/core';
import { Sessao } from 'src/app/models/sessao';
import { SessaoService } from 'src/app/services/sessao/sessao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  constructor(
    private sessaoService: SessaoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(sessao: Sessao) {
    this.sessaoService.post(sessao).subscribe((data) =>
      false
    );  
    this.router.navigate(['/edit-session/1']);
    
  }

}
