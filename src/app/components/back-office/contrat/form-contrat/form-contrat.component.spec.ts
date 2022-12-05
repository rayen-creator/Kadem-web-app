import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContratComponent } from './form-contrat.component';

describe('FormContratComponent', () => {
  let component: FormContratComponent;
  let fixture: ComponentFixture<FormContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
