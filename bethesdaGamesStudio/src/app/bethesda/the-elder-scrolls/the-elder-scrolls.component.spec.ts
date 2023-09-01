import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheElderScrollsComponent } from './the-elder-scrolls.component';

describe('TheElderScrollsComponent', () => {
  let component: TheElderScrollsComponent;
  let fixture: ComponentFixture<TheElderScrollsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheElderScrollsComponent]
    });
    fixture = TestBed.createComponent(TheElderScrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
