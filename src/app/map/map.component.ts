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



// export class MapComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//
//     var map, infoWindow;
//     function initMap() {
//       map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 25.7660580, lng: -80.1961550},
//         zoom: 6
//       });
//       infoWindow = new google.maps.InfoWindow;
//
//       // Try HTML5 geolocation.
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//           var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };
//
//           infoWindow.setPosition(pos);
//           infoWindow.setContent('Location found.');
//           infoWindow.open(map);
//           map.setCenter(pos);
//         }, function() {
//           handleLocationError(true, infoWindow, map.getCenter());
//         });
//       } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//       }
//     }
//
//     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//       infoWindow.setPosition(pos);
//       infoWindow.setContent(browserHasGeolocation ?
//                             'Error: The Geolocation service failed.' :
//                             'Error: Your browser doesn\'t support geolocation.');
//       infoWindow.open(map);
//     }
//   }
// }



// title: string = 'Track your location';
// lat: number = 25.7660580;
// lng: number = -80.1961550;

export class AppModule { }
