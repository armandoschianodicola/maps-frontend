import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherEventOption } from '../models/weather-event-option';
import { weatherEventOptionMock } from '../data/weatherEventOptionMock';

@Injectable({
  providedIn: 'root'
})
export class WeatherEventOptionService {
  
  getWeatherEventOptions(): Observable<WeatherEventOption>  {
    throw new Error('Method not implemented.');
  }

  getWeatherEventOptionsMocks(): Observable<WeatherEventOption>  {
    return new Observable((observer) => {
      weatherEventOptionMock.forEach((option) => {
        observer.next(option)
      })
    })
  }

  constructor() { }
}
