import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LeidosPendientesComponent } from './leidos-pendientes/leidos-pendientes.component';
import { VistaPendientesComponent } from './vista-pendientes/vista-pendientes.component';
import { EditarPendientesComponent } from './editar-pendientes/editar-pendientes.component';

const routes: Routes = [{ 
  path: '', 
  children: [
    { path: 'pendientes', component: VistaPendientesComponent },
    { path: 'finalizados', component: LeidosPendientesComponent },
    { path: ':id', component: EditarPendientesComponent },
    { path: '**', redirectTo: 'pendientes' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendientesRoutingModule { }
