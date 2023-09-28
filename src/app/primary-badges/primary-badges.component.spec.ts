import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryBadgesComponent } from './primary-badges.component';

describe('PrimaryBadgesComponent', () => {
  let component: PrimaryBadgesComponent;
  let fixture: ComponentFixture<PrimaryBadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryBadgesComponent]
    });
    fixture = TestBed.createComponent(PrimaryBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
