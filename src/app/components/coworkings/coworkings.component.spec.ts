import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingsComponent } from './coworkings.component';

describe('CoworkingsComponent', () => {
  let component: CoworkingsComponent;
  let fixture: ComponentFixture<CoworkingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoworkingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
