import { TestBed } from '@angular/core/testing';

import { ApiIngredientsService } from './api-ingredients.service';

describe('ApiIngredientsService', () => {
  let service: ApiIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
