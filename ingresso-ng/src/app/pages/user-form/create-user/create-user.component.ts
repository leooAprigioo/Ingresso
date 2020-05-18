import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private usuarioService : UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createUser(usuario: Usuario) {
    this.usuarioService.post(usuario).subscribe((data) => 
      this.router.navigate(['/login'])
    );
  }

}
