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
  declarations: [AppComponent, MapComponent, HeaderComponent, FooterComponent, BodyComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
