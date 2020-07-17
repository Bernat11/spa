import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorythmComponent } from './algorythm.component';

describe('AlgorythmComponent', () => {
  let component: AlgorythmComponent;
  let fixture: ComponentFixture<AlgorythmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorythmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorythmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
