import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('weatherMap') weatherMap;
  map: google.maps.Map;

  @Input() lat;
  @Input() lng;

  constructor() {
  }

  ngOnInit() {
    this.setMap(this.lat, this.lng);
  }

  setMap(lat, lng) {
    var coordinates = new google.maps.LatLng(lat, lng);
    this.map = new google.maps.Map(this.weatherMap.nativeElement, {
      center: coordinates,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    new google.maps.Marker({
      position: coordinates,
      map: this.map
    });
  }

}
