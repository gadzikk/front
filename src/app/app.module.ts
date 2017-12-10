import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TereComponent } from './tere/tere.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TereComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
