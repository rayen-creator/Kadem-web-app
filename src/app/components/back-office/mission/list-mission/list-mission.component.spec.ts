import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMissionComponent } from './list-mission.component';

describe('ListMissionComponent', () => {
  let component: ListMissionComponent;
  let fixture: ComponentFixture<ListMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
