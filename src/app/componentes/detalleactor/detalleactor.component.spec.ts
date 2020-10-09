import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleactorComponent } from './detalleactor.component';

describe('DetalleactorComponent', () => {
  let component: DetalleactorComponent;
  let fixture: ComponentFixture<DetalleactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
