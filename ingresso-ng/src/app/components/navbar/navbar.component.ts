import { Component, OnInit, Input } from '@angular/core';
import { faHome, faTicketAlt, faSignInAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/models/usuario';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public usuario: Usuario;
  public isLogged: boolean;

  faHome = faHome;
  faTicketAlt = faTicketAlt;
  faSignInAlt = faSignInAlt;
  faLock = faLock;

  constructor(
    private storageService: LocalStorageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.loginEmitter$.subscribe(data => { 
      console.log(data);
      this.isLogged = data;
      // this.usuario = this.storageService.getItem('usuario')[0];
      // console.log(this.storageService.getItem('usuario'));
      // console.log(this.usuario.admin);
      // console.log(this.usuario);
    })
  }

}
