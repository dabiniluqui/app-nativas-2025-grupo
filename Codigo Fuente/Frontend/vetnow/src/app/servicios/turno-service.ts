import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

   private apiUrl = 'http://localhost:3010/turno';

  constructor(private http: HttpClient) { }

   solicitarTurno(turno : { fecha_hora: string; domicilio: string; especificaciones: string; nombre_contacto: string; urgencia: boolean}):Observable<any>{
   
    return this.http.post(this.apiUrl, turno);
  }
  

}

