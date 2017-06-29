import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdCardModule, MdProgressSpinnerModule, 
  MdButtonModule, MdTooltipModule, MdInputModule} from '@angular/material';
import 'hammerjs';

//Components
//TODO: Roll related components into seperate module.
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar.component';
import { AppAboutComponent } from './app-about.component';
import { AppHomeComponent } from './app-home.component';
import { AppLoginComponent } from './app-login.component';

//Services
import { AppService } from './app.service';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AppAboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'login',
    component: AppLoginComponent,
    data: { title: 'Login' }
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
    RouterModule.forRoot(appRoutes), MdInputModule, FormsModule
  ],
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppAboutComponent,
    AppHomeComponent,
    AppLoginComponent
  ],
  providers:[AppService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
