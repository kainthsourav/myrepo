import { TestBed } from '@angular/core/testing';

import { SaveRegisterDataService } from './save-register-data.service';

describe('SaveRegisterDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveRegisterDataService = TestBed.get(SaveRegisterDataService);
    expect(service).toBeTruthy();
  });
});
