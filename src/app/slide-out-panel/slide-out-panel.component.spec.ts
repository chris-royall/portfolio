import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOutPanelComponent } from './slide-out-panel.component';

describe('SlideOutPanelComponent', () => {
  let component: SlideOutPanelComponent;
  let fixture: ComponentFixture<SlideOutPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideOutPanelComponent]
    });
    fixture = TestBed.createComponent(SlideOutPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
