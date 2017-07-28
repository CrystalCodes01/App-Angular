import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

declare var google: any;

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




// title: string = 'Track your location';
// lat: number = 25.7660580;
// lng: number = -80.1961550;

export class AppModule { }
