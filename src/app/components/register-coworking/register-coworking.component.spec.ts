import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoworkingComponent } from './register-coworking.component';

describe('RegisterCoworkingComponent', () => {
  let component: RegisterCoworkingComponent;
  let fixture: ComponentFixture<RegisterCoworkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCoworkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
