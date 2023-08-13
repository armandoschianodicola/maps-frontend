import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherEventOptionService } from 'src/app/services/weather-event-option.service';

@Component({
  selector: 'app-select-weather-event',
  templateUrl: './select-weather-event.component.html',
  styleUrls: ['./select-weather-event.component.scss']
})
export class SelectWeatherEventComponent {

  @Output() onSelectEvent = new EventEmitter<any>();

  options: { label: string; value: number }[] = [];
  title = 'Evento';
  placeholder = 'Evento';

  constructor(
    private weatherEventOptionService: WeatherEventOptionService
    ) {
    this.weatherEventOptionService.getWeatherEventOptionsMocks().subscribe((option) => {
      this.options.push(option)
    })

  }

  onSelect(e: Event) {
    let options = (e.target as HTMLSelectElement).options
    this.onSelectEvent.emit({
      label: options[options.selectedIndex].innerText,
      value: (e.target as HTMLInputElement).value
    });
  }

}
