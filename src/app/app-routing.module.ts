import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BodyComponent } from './body/body.component';
import { SmsComponent } from './sms/sms.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { Router, Request, Response } from "express";
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { MapComponent } from './map/map.component';
import { BusinessComponent } from './business/business.component';
import { SafeComponent } from './safe/safe.component';
import { AngelComponent } from './angel/angel.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'sms',  component: SmsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'map', component: MapComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'safe', component: SafeComponent },
  { path: 'angel', component: AngelComponent }

  // url display name (path name
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
