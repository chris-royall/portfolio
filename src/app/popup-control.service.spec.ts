import { TestBed } from '@angular/core/testing';

import { PopupControlService } from './popup-control.service';

describe('PopupControlService', () => {
  let service: PopupControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
