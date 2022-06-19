import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondnotComponent } from './fondnot.component';

describe('FondnotComponent', () => {
  let component: FondnotComponent;
  let fixture: ComponentFixture<FondnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondnotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
