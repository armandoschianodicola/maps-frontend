import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  private map: any;
  startLat: any;
  startLng: any;

  constructor(private geolocationService: GeolocationService) {}

  private initMap(): void {
    this.geolocationService.getLocation();
    this.map = L.map('map', {
      center: [40.7976415, 14.0463102],
      zoom: 10,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
