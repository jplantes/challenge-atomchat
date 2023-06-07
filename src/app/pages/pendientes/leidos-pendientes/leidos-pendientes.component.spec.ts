import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeidosPendientesComponent } from './leidos-pendientes.component';

describe('LeidosPendientesComponent', () => {
  let component: LeidosPendientesComponent;
  let fixture: ComponentFixture<LeidosPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeidosPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeidosPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
