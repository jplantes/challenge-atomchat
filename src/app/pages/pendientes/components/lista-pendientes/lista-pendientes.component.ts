import { Component, OnInit, Input } from '@angular/core';
import { Pendiente } from 'src/app/interfaces/pendiente';
import { PenditeService } from 'src/app/services/pendite.service';

@Component({
  selector: 'app-lista-pendientes',
  templateUrl: './lista-pendientes.component.html',
  styleUrls: ['./lista-pendientes.component.css']
})
export class ListaPendientesComponent implements OnInit {
  @Input() estado: boolean = false;
  @Input() listado: Pendiente[] = [];

  constructor(
    private _pendiente: PenditeService
  ) {}

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado() {
    this.listado = this._pendiente.filtrarPendientes(this.estado);
  }

  public eliminarPendiente(id: string): void {
    this._pendiente.deletePendientes(id);
    this.cargarListado();
  }

  public cambiarEstado( id: string ): void {
    this._pendiente.cambiarEstado(id);
    this.cargarListado();
  }

}
