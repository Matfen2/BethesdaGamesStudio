import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUniversComponent } from './show-univers.component';

describe('ShowUniversComponent', () => {
  let component: ShowUniversComponent;
  let fixture: ComponentFixture<ShowUniversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUniversComponent]
    });
    fixture = TestBed.createComponent(ShowUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
