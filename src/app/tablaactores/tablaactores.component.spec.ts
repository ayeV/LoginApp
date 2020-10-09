import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaactoresComponent } from './tablaactores.component';

describe('TablaactoresComponent', () => {
  let component: TablaactoresComponent;
  let fixture: ComponentFixture<TablaactoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaactoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaactoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
