import { Injectable } from '@angular/core';
import { Pendiente } from '../interfaces/pendiente';

@Injectable({
  providedIn: 'root'
})
export class PenditeService {

  constructor() { }

  getPendientes(): Pendiente[] | any[] {
    const pendientes = JSON.parse(localStorage.getItem('pendientes') ?? '[]');
    return pendientes;
  }

  updatePendientes( pendientes: Pendiente[] ): void {
    localStorage.setItem('pendientes', JSON.stringify(pendientes));
  }

  addPendiente(pendiente: Pendiente) :void {
    const pendientes: Pendiente[] = this.getPendientes();
    pendientes.unshift(pendiente);

    localStorage.setItem('pendientes', JSON.stringify(pendientes));
  }

  deletePendientes(id: string): void {
    const temporal = this.getPendientes().filter( pendiente => pendiente.id !== id );
    this.updatePendientes(temporal);
  }

  filtrarPendientes(estado: boolean): Pendiente[] {
    const temporal: Pendiente[] = [];

    this.getPendientes().forEach( resultado => {
      if (resultado.estado === estado) {
        temporal.push({...resultado})
      }
    });

    return temporal;
  }

  cambiarEstado(id: string){
    const temporal = this.getPendientes();
    
    temporal.forEach( tarea => {
      if (tarea.id === id) {
        tarea.estado = !tarea.estado
      }
    });

    this.updatePendientes(temporal);
  }
}
