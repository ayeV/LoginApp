import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaactorComponent } from './tablaactor.component';

describe('TablaactorComponent', () => {
  let component: TablaactorComponent;
  let fixture: ComponentFixture<TablaactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
