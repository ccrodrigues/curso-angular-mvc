import { TestBed } from '@angular/core/testing';

import { FormsExemploService } from './forms-exemplo.service';

describe('FormsExemploService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsExemploService = TestBed.get(FormsExemploService);
    expect(service).toBeTruthy();
  });
});
