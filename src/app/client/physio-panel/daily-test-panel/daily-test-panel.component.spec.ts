import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTestPanelComponent } from './daily-test-panel.component';

describe('DailyTestPanelComponent', () => {
  let component: DailyTestPanelComponent;
  let fixture: ComponentFixture<DailyTestPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTestPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
