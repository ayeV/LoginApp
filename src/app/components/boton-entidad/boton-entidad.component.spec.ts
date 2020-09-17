import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEntidadComponent } from './boton-entidad.component';

describe('BotonEntidadComponent', () => {
  let component: BotonEntidadComponent;
  let fixture: ComponentFixture<BotonEntidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonEntidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
