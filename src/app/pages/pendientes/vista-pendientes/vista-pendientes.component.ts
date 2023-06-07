import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pendiente } from 'src/app/interfaces/pendiente';
import { PenditeService } from 'src/app/services/pendite.service';

import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-vista-pendientes',
  templateUrl: './vista-pendientes.component.html',
  styleUrls: ['./vista-pendientes.component.css']
})
export class VistaPendientesComponent implements OnInit{

  public mandarListado: Pendiente[] = [];
  public estado: boolean = false;

  public inputPen: FormGroup = this.fb.group({
    pendiente: ['', [ Validators.required, Validators.minLength(4) ]]
  });

  constructor (
    private fb: FormBuilder,
    private _pendiente: PenditeService
  ){}

  ngOnInit(): void {
    this.cargarPendientes();
  }

  cargarPendientes() {
    this.mandarListado = this._pendiente.filtrarPendientes(this.estado);
    this.estado = false;
  }

  onSubmit() {
    if (this.inputPen.invalid) {
      this.inputPen.markAllAsTouched(); 
      return
    };

    const newPen: Pendiente = {
      id: UUID.UUID(),
      ...this.inputPen.value,
      estado: false
    }

    this._pendiente.addPendiente(newPen);
    this.cargarPendientes();
    this.inputPen.reset({pendiente: ''});
  }

  getFieldError(field: string): string | null {
    if ( !this.inputPen.controls[field] ) return null;

    const errors = this.inputPen.controls[field].errors || {};

    for ( const key of Object.keys(errors) ) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Escribi minimo de ${errors['minlength'].requiredLength} caracteres`;
      }
    }

    return '';
  }

  isValidField( field: string ): boolean | null {
    return this.inputPen.controls[field].errors && this.inputPen.controls[field].touched;
  }
}
