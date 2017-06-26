import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule,MdCardModule, MdProgressSpinnerModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, MaterialModule, MdCardModule, MdProgressSpinnerModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
