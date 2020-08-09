import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingContactComponent } from './coworking-contact.component';

describe('CoworkingContactComponent', () => {
  let component: CoworkingContactComponent;
  let fixture: ComponentFixture<CoworkingContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkingContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
