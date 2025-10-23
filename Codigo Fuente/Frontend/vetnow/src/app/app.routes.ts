import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),  //Ruta que lleva al componente de home
  },
  {
    path: 'nuevo-turno',
    loadComponent: () => import('./solicitar-turno/solicitar-turno.component').then((m) => m.SolicitarTurnoComponent),   //Ruta que lleva al componente de nuevo turno
  },
    {
    path: 'iniciar-sesion',
    loadComponent: () => import('./inicio-sesion/inicio-sesion.component').then((m) => m.InicioSesionComponent),    //Ruta que lleva al componente de iniciar sesion
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

    

  },
];
