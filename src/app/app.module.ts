import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';

import {TownService} from "./services/town/town.service";
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
