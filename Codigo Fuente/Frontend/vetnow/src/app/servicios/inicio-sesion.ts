import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class InicioSesion {
  
private apiUrl = 'http://localhost:3010/public.usuario';
  constructor(private http: HttpClient) { }

 iniciarSesion( usuario : { username: string; pasword: string}):Observable<any>{
   
    return this.http.post(this.apiUrl, usuario);

}
}
