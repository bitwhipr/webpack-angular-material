import { Component } from '@angular/core';

import '../assets/css/style.scss';
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

  simulateLoad(){
    this.isLoading=true;

    setTimeout(()=>{
      this.isLoading=false;
    },5000)
  }

  openHomepage():void{
    window.open('https://github.com/johnston4hooah/webpack-angular-material');
  }
 }
