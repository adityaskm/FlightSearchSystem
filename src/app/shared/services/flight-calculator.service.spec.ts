import { TestBed } from '@angular/core/testing';

import { FlightCalculatorService } from './flight-calculator.service';

describe('FlightCalculatorService', () => {
  let service: FlightCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
