import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawCardComponent } from './draw-card.component';

describe('DrawCardComponent', () => {
  let component: DrawCardComponent;
  let fixture: ComponentFixture<DrawCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
