import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TereComponent } from './tere/tere.component';

export const router:Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'tere', component:TereComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);
