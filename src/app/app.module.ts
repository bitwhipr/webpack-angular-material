import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdCardModule, MdProgressSpinnerModule, MdButtonModule, MdTooltipModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar.component';
import { AppAboutComponent } from './app-about.component';
import { AppHomeComponent } from './app-home.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AppAboutComponent,
    data: { title: 'About' }
  },
  { path: '',
    component: AppHomeComponent,
    data: { title: 'Home' }
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule,
    MdCardModule, MdProgressSpinnerModule, MdButtonModule, MdTooltipModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppAboutComponent,
    AppHomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
