import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdCardModule, MdProgressSpinnerModule, MdButtonModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule,
    MdCardModule, MdProgressSpinnerModule, MdButtonModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
