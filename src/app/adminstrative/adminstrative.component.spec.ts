import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrativeComponent } from './adminstrative.component';

describe('AdminstrativeComponent', () => {
  let component: AdminstrativeComponent;
  let fixture: ComponentFixture<AdminstrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstrativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
