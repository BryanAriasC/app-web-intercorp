import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesviacionEstandarComponent } from './desviacion-estandar.component';

describe('DesviacionEstandarComponent', () => {
  let component: DesviacionEstandarComponent;
  let fixture: ComponentFixture<DesviacionEstandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesviacionEstandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesviacionEstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
