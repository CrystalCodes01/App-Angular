import { NgModule, ApplicationRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
​import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { SmsComponent } from './sms/sms.component';
import { Directive, Output, EventEmitter } from '@angular/core';
import { HomeComponent } from './home/home.component';



//
// @NgModule({
//   imports:      [ BrowserModule, routing ],
//   providers:    [appRoutingProviders],
//   bootstrap:    [ AppComponent ]
// })
// var accountSid = 'AC2c3c58211dd4070f5ad02c33786defc1';
// var authToken = '581375e7b8e5a09182a2497843c19d53';
//
// //require the Twilio module and create a REST client
// var client = require('twilio')(accountSid, authToken);
//
// client.messages.create({
//     to: "+16784711521",
//     from: "+13143000312",
//     body: "Testing for Safety Pin",
// }, function(err, message) {
//     console.log(message.sid);
// });




@NgModule({
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6A20GtS8PfE1DXgt6UAJLLm6sB6ys0fY'
    })
  ],
  providers: [],
  declarations: [AppComponent, MapComponent, HeaderComponent, FooterComponent, BodyComponent, SmsComponent, HomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
