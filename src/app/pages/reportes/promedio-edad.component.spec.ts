import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioEdadComponent } from './promedio-edad.component';

describe('PromedioEdadComponent', () => {
  let component: PromedioEdadComponent;
  let fixture: ComponentFixture<PromedioEdadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromedioEdadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromedioEdadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
