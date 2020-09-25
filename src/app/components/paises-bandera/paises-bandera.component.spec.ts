import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesBanderaComponent } from './paises-bandera.component';

describe('PaisesBanderaComponent', () => {
  let component: PaisesBanderaComponent;
  let fixture: ComponentFixture<PaisesBanderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesBanderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesBanderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
