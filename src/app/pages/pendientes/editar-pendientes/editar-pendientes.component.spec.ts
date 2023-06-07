import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPendientesComponent } from './editar-pendientes.component';

describe('EditarPendientesComponent', () => {
  let component: EditarPendientesComponent;
  let fixture: ComponentFixture<EditarPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
