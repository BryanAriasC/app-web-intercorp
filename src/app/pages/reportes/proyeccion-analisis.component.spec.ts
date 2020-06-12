import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeccionAnalisisComponent } from './proyeccion-analisis.component';

describe('ProyeccionAnalisisComponent', () => {
  let component: ProyeccionAnalisisComponent;
  let fixture: ComponentFixture<ProyeccionAnalisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyeccionAnalisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyeccionAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
