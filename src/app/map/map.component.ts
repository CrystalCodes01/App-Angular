import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title: string = 'Track your location';
  lat: number = 25.7660580;
  lng: number = -80.1961550;
}


export class AppModule { }
