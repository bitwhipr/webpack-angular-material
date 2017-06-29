import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdCardModule, MdProgressSpinnerModule, MdButtonModule, MdTooltipModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar.component';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule,
    MdCardModule, MdProgressSpinnerModule, MdButtonModule, MdTooltipModule
  ],
  declarations: [
    AppComponent,
    AppNavbarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
