import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista',
    loadChildren: () => import('./pages/pendientes/pendientes.module').then( m => m.PendientesModule )
  },
  { path: '**', redirectTo: 'lista' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
