import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingLocationComponent } from './coworking-location.component';

describe('CoworkingLocationComponent', () => {
  let component: CoworkingLocationComponent;
  let fixture: ComponentFixture<CoworkingLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkingLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
