import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pendiente } from 'src/app/interfaces/pendiente';
import { PenditeService } from 'src/app/services/pendite.service';

@Component({
  selector: 'app-editar-pendientes',
  templateUrl: './editar-pendientes.component.html',
  styleUrls: ['./editar-pendientes.component.css']
})
export class EditarPendientesComponent implements OnInit{

  pendiente: Pendiente[] = [];
  pendieteEditar: string = '';
  id: string = '';

  public inputEditar: FormGroup = this.fb.group({
    pendiente: [this.pendieteEditar, [Validators.required, Validators.minLength(5)] ]
  });

  constructor(
    private _pendiete: PenditeService,
    private routeActive: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.obtenerPendiente();
  }

  obtenerPendiente(){
    this.pendiente = this._pendiete.getPendientes().filter( tarea => tarea.id === this.id );
    this.inputEditar.reset({pendiente: this.pendiente[0].pendiente});
  }

  public editarPendiente(): void{
    const aux: Pendiente[] = [];

    this._pendiete.getPendientes().forEach( tarea => {
      if (tarea.id === this.id) {
        tarea.pendiente = this.inputEditar.value.pendiente
      }
      aux.push(tarea);
    });

    this._pendiete.updatePendientes(aux);
    this.router.navigate(['/lista']);
  }

}
