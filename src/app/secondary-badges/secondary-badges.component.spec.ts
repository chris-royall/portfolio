import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryBadgesComponent } from './secondary-badges.component';

describe('SecondaryBadgesComponent', () => {
  let component: SecondaryBadgesComponent;
  let fixture: ComponentFixture<SecondaryBadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryBadgesComponent]
    });
    fixture = TestBed.createComponent(SecondaryBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
