import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Town} from 'app/classes/town';
import {TownService} from "../services/town/town.service";
import {Forecast} from "../classes/forecast";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  towns: Town[];
  town: Town;
  @ViewChild(MapComponent) private mapComponent: MapComponent;


  constructor(private townService: TownService) {
  }

  ngOnInit() {
    this.getTowns();
  }

  getTowns(): void {
    this.townService.getTowns()
      .subscribe(towns => {
        this.towns = towns.map(function (e) {
          return new Town(e.id, e.name);
        });
        this.updateTown(this.towns[0].id);
      });
  }

  updateTown(id): void {
    this.town = undefined;
    this.townService.getTown(id)
      .subscribe(e => {
        this.town = new Town(
          e.id,
          e.name,
          e.latitude,
          e.longitude,
          new Forecast(
            e.forecast.summary,
            e.forecast.icon,
            e.forecast.temperature
          ));

        if(this.mapComponent)
          this.mapComponent.setMap(this.town.latitude, this.town.longitude);
      })
  }
}
