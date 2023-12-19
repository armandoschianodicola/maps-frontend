import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public lat: number = 0;
  public lng: number = 0;

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat, this.lng);
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
}
