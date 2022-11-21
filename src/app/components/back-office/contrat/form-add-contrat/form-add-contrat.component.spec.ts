import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddContratComponent } from './form-add-contrat.component';

describe('FormAddContratComponent', () => {
  let component: FormAddContratComponent;
  let fixture: ComponentFixture<FormAddContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
