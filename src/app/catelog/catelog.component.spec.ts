import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatelogComponent } from './catelog.component';

describe('CatelogComponent', () => {
  let component: CatelogComponent;
  let fixture: ComponentFixture<CatelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatelogComponent]
    });
    fixture = TestBed.createComponent(CatelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
