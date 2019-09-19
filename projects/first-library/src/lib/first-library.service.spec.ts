import { TestBed, inject } from '@angular/core/testing';

import { FirstLibraryService } from './first-library.service';

describe('FirstLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstLibraryService]
    });
  });

  it('should be created', inject([FirstLibraryService], (service: FirstLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
