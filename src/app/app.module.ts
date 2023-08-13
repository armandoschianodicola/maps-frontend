import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SelectWeatherEventComponent } from './components/atoms/select-weather-event/select-weather-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectWeatherEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
