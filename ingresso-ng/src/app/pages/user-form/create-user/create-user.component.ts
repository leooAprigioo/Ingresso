import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private usuarioService : UsuarioService
  ) { }

  ngOnInit() {
  }

  createUser(usuario: Usuario) {
    this.usuarioService.post(usuario).subscribe((data) =>
      console.log(data)
    );
  }

}
