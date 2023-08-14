import { Component } from '@angular/core';
import { WeatherEventOption } from 'src/app/models/weather-event-option';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedWeatherOption: WeatherEventOption = {
    label: '',
    value: 0
  }

  send(): void {
    console.log(this.selectedWeatherOption)
  }

  eventSelected(e: any): void {
    this.selectedWeatherOption = e;
  }

}
