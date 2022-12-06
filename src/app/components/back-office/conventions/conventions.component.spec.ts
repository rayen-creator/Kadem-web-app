import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionsComponent } from './conventions.component';

describe('ConventionsComponent', () => {
  let component: ConventionsComponent;
  let fixture: ComponentFixture<ConventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
