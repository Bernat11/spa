import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingServicesComponent } from './coworking-services.component';

describe('CoworkingServicesComponent', () => {
  let component: CoworkingServicesComponent;
  let fixture: ComponentFixture<CoworkingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
