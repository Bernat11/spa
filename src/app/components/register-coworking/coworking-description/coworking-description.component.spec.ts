import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingDescriptionComponent } from './coworking-description.component';

describe('CoworkingDescriptionComponent', () => {
  let component: CoworkingDescriptionComponent;
  let fixture: ComponentFixture<CoworkingDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkingDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
