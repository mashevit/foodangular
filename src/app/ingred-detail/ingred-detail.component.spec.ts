import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredDetailComponent } from './ingred-detail.component';

describe('IngredDetailComponent', () => {
  let component: IngredDetailComponent;
  let fixture: ComponentFixture<IngredDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
