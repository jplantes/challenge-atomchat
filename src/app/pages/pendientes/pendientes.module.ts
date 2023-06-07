import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { PendientesRoutingModule } from './pendientes-routing.module';

import { ListaPendientesComponent } from './components/lista-pendientes/lista-pendientes.component';
import { LeidosPendientesComponent } from './leidos-pendientes/leidos-pendientes.component';
import { VistaPendientesComponent } from './vista-pendientes/vista-pendientes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditarPendientesComponent } from './editar-pendientes/editar-pendientes.component';


@NgModule({
  declarations: [
    ListaPendientesComponent,
    LeidosPendientesComponent,
    VistaPendientesComponent,
    NavbarComponent,
    EditarPendientesComponent,
  ],
  imports: [
    CommonModule,
    PendientesRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    NavbarComponent
  ]
})
export class PendientesModule { }
