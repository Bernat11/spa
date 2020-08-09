import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingSpacesComponent } from './coworking-spaces.component';

describe('CoworkingSpacesComponent', () => {
  let component: CoworkingSpacesComponent;
  let fixture: ComponentFixture<CoworkingSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkingSpacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
