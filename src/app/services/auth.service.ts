import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyAL884fRaXkSjVyOL2h8AaPyxZrRxFnYuc';
  //Crear nuevo usuario: https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login: https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {}

  logout() {}

  login(usuario: Usuario) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apikey}`,
      authData
    );
  }

  nuevoUsuario(usuario: Usuario) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(`${this.url}signUp?key=${this.apikey}`, authData);
  }
}
