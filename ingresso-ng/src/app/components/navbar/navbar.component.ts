import { Component, OnInit, Input } from '@angular/core';
import { faHome, faTicketAlt, faSignInAlt, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/models/usuario';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

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
  faSignOutAlt = faSignOutAlt;

  constructor(
    private storageService: LocalStorageService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadCurrentUser();
    this.authenticationService.loginEmitter$.subscribe(data => { 
      this.isLogged = data;
      this.loadCurrentUser();
    })
  }

  loadCurrentUser() {
    this.usuario = this.authenticationService.getCurrentUser();
    if (this.usuario) {
      this.isLogged = true;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['movie-list'])
  }

}
