import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Para mostrar mensajes de alerta

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
    imports: [ IonicModule, FormsModule, RouterModule],
})


 export class InicioSesionComponent implements OnInit {
iniciarSesion={
   usuario: '',
   pasword: '',
  }

  constructor() { }

  ngOnInit() {}

  iniciarsesionsub() {
console.log(this.iniciarSesion);
  }
}


