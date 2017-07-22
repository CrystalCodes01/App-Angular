import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BodyComponent } from './body/body.component';
import { SmsComponent } from './sms/sms.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'sms',  component: SmsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'register',  component: RegisterComponent }   // url display name (path name
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
