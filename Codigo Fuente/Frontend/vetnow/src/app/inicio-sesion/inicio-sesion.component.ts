import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule} from '@angular/router';
import { AlertController } from '@ionic/angular'; // Para mostrar mensajes de alerta
import { InicioSesion } from '../servicios/inicio-sesion';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
    imports: [ IonicModule, FormsModule, RouterModule],
})


 export class InicioSesionComponent implements OnInit {
iniciarSesion={
   username: '',
   pasword: '',
  }

  mensajeUsuario: string = ''; // Variable para almacenar mensajes al usuario

  constructor(private usuarioservice: InicioSesion, private router: Router) { 
    

   }

  ngOnInit() {}

  iniciarsesionsub() {
console.log(this.iniciarSesion);
    // Llama al servicio
    this.usuarioservice.iniciarSesion(this.iniciarSesion).subscribe({
      
      
      next: (res) => {
        
        this.mensajeUsuario = res.mensaje; 
        console.log('Login exitoso:', res);
        this.router.navigate(['/nuevo-turno']);
      },
      
      
      error: (err) => {
        
        if (err.error && err.error.mensaje) {
            this.mensajeUsuario = err.error.mensaje; 
        } else if (err.status === 500 && typeof err.error === 'string') {
             this.mensajeUsuario = err.error; 
        } else {
            this.mensajeUsuario = 'Error de conexión o respuesta inesperada.'; 
        }
        console.error('Error de login:', err);
      }
    });
  }
}



