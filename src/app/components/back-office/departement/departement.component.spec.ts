import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementComponent } from './departement.component';

describe('DepartementComponent', () => {
  let component: DepartementComponent;
  let fixture: ComponentFixture<DepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
