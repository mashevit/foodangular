import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredsComponent } from './ingreds.component';

describe('IngredsComponent', () => {
  let component: IngredsComponent;
  let fixture: ComponentFixture<IngredsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
