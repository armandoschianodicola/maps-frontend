import { TestBed } from '@angular/core/testing';

import { WeatherEventOptionService } from './weather-event-option.service';

describe('WeatherEventOptionService', () => {
  let service: WeatherEventOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherEventOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
