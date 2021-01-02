import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      text: 'Espere por favor',
      allowEscapeKey: true,
      icon: 'info',
    });
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
        Swal.close();
      },
      (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error al autenticar',
          text: err.error.error.message,
          allowEscapeKey: true,
          icon: 'error',
        });
      }
    );
  }
}
