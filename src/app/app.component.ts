import { Component } from '@angular/core';

import '../assets/css/styles.css';
import '../../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css';
import 'hammerjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle:string;
  appDescription:string;
  isLoading:boolean;

  constructor(){
    this.appTitle="Hello from Angular App with Webpack";
    this.appDescription="An Angular and Sears Johnston production"
  }

  SimulateLoad(){
    this.isLoading=true;

    setTimeout(()=>{
      this.isLoading=false;
    },5000)
  }
 }
