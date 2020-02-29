import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorDashboardComponent } from './comparator-dashboard.component';

describe('ComparatorDashboardComponent', () => {
  let component: ComparatorDashboardComponent;
  let fixture: ComponentFixture<ComparatorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparatorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
