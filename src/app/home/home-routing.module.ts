import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
 /* {
    path: '',
    component: HomePage,
  }*/

  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'clasificacion',
        loadChildren: () => import('../clasificacion/clasificacion.module').then(m => m.ClasificacionPageModule)
      },
      {
        path: 'partidos',
        loadChildren: () => import('../partidos/partidos.module').then(m => m.PartidosPageModule)
      },
      {
        path: 'goleadores',
        loadChildren: () => import('../goleadores/goleadores.module').then(m => m.GoleadoresPageModule)
      },
      {
        path: '',
        redirectTo: 'clasificacion',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
