import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPendientesComponent } from './vista-pendientes.component';

describe('VistaPendientesComponent', () => {
  let component: VistaPendientesComponent;
  let fixture: ComponentFixture<VistaPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
