import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SelectWeatherEventComponent } from './components/atoms/select-weather-event/select-weather-event.component';
import { MainFormComponent } from './components/organisms/main-form/main-form.component';
import { MapComponent } from './components/organisms/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectWeatherEventComponent,
    MainFormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
