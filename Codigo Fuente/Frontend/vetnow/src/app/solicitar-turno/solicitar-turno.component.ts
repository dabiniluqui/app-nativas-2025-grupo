import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss'],
  imports: [ IonicModule, FormsModule

  ],
})
export class SolicitarTurnoComponent  implements OnInit {

  solicitarTurno={
    fecha: '',
    hora: '',
    domicilio: '',
    especificaciones: '',
    nombre: '',
  }
  constructor() { }

  ngOnInit() {}

  solicitarTurnoSubmit() {

  }

}


