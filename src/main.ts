// / <reference path="../typings/index.d.ts" />
import { Type, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
​import { HttpModule } from '@angular/http';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule);
