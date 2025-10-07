import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss'],
  imports: [ IonicModule, FormsModule, RouterModule],
  
})
export class SolicitarTurnoComponent  implements OnInit {

  solicitarTurno={
    fecha: '',

    domicilio: '',
    especificaciones: '',
    nombre: '',
    urgencia: false,
  }
  constructor() { }

  ngOnInit() {}

  solicitarTurnoSubmit() {
console.log(this.solicitarTurno);
  }

}


