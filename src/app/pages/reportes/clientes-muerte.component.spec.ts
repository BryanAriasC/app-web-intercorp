import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesMuerteComponent } from './clientes-muerte.component';

describe('ClientesMuerteComponent', () => {
  let component: ClientesMuerteComponent;
  let fixture: ComponentFixture<ClientesMuerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesMuerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesMuerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
