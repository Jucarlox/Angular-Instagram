import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthLoginDto, AuthSignUpDto } from '../model/dto/auth.dto';
import { AuthLoginResponse, AuthSignUpResponse } from '../model/interfaces/auth.interface';

const AUTH_BASE_URL = 'auth';
const DEFAULT_HEADERS = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    "Access-Control-Max-Age": "3600",
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`;

  constructor(private http: HttpClient) { }

  register(signUpDto: AuthSignUpDto): Observable<AuthSignUpResponse> {
    const headers = {
      
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        "Access-Control-Max-Age": "3600",
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      }
    
    let requestUrl = `${this.authBaseUrl}/register`;
    let params = new HttpParams().set('nombre', signUpDto.nombre)
    .set('apellidos', signUpDto.apellidos)
    .set('nick', signUpDto.nick)
    .set('email', signUpDto.email)
    .set('fechaNacimiento', signUpDto.fechaNacimiento)
    .set('rol', signUpDto.rol)
    .set('password', signUpDto.password)
    .set('password2', signUpDto.password2)
    .set('file', signUpDto.file)
   return this.http.post<AuthSignUpResponse>(requestUrl, {'headers': headers, 'params': params});
  }

  login(loginDto: AuthLoginDto): Observable<AuthLoginResponse> {
    let requestUrl = `${this.authBaseUrl}/login`;
    return this.http.post<AuthLoginResponse>(requestUrl, loginDto, DEFAULT_HEADERS);
  }

  

}