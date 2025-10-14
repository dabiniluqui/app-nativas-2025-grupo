import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

   private apiUrl = 'http://localhost:3010/turno';

  constructor(private http: HttpClient) { }

   solicitarTurno(turno : { fechayhora: string; domicilio: string; especificaciones: string; nombre: string; urgencia: boolean}):Observable<any>{
   
    return this.http.post(this.apiUrl, turno);
  }
  

}

