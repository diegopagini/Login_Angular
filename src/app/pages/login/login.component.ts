import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor() {}

  ngOnInit(): void {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form);
    console.log(this.usuario);
  }
}
