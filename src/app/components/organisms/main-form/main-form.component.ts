import { Component } from '@angular/core';
import { WeatherEventOption } from 'src/app/models/weather-event-option';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {

  constructor(
    private geolocationService: GeolocationService,
  ) { }

  selectedWeatherOption: WeatherEventOption = {
    label: '',
    value: 0
  }

  public ngOnInit(): void {
    this.geolocationService.getLocation();
  }

  send(): any {
    let data = {
      lat: this.geolocationService.lat,
      lng: this.geolocationService.lng,
      label: this.selectedWeatherOption.label,
      value: this.selectedWeatherOption.value
    }
    console.log(data)
    return data;
  }

  eventSelected(e: any): void {
    this.selectedWeatherOption = e;
  }

}
