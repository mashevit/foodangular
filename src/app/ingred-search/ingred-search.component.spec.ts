import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredSearchComponent } from './ingred-search.component';

describe('IngredSearchComponent', () => {
  let component: IngredSearchComponent;
  let fixture: ComponentFixture<IngredSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
