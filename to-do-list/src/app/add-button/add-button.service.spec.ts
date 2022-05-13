import { TestBed } from '@angular/core/testing';

import { AddButtonService } from './add-button.service';

describe('AddButtonService', () => {
  let service: AddButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
