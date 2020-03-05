import { Component, OnInit, Input } from '@angular/core';
import { faHome, faTicketAlt, faSignInAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/models/usuario';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public usuario: Usuario;

  faHome = faHome;
  faTicketAlt = faTicketAlt;
  faSignInAlt = faSignInAlt;
  faLock = faLock;

  constructor(
    private storageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.buildUsuario(this.storageService.getItem('usuario')[0]);
    console.log(this.usuario);
  }

  buildUsuario(payload: any) {
    this.usuario = new Usuario(
      payload.id,
      payload.nome,
      payload.dataNascimento,
      payload.senha,
      payload.email,
      payload.cpf,
      payload.endereco,
      payload.admin
    )
  }

}
