import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelComponent } from './physio-panel.component';

describe('PhysioPanelComponent', () => {
  let component: PhysioPanelComponent;
  let fixture: ComponentFixture<PhysioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
