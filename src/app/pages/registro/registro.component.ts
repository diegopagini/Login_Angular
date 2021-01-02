import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: Usuario;
  constructor() {}

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.usuario.email = 'diegopaginidev@gmail.com';
  }

  onSubmit() {
    console.log(this.usuario);
  }
}
