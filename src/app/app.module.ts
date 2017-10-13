import { DashboardModule } from './modules/dashboard.module';
import { AuthModule } from './modules/auth.module';
import { HomePageModule } from './modules/homePage.module';
import { approutes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';


@NgModule({

  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule,approutes,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,HttpModule,HomePageModule,
    AuthModule,DashboardModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWD78mPE333DsOppmymUHAZpAB1lCX4KE',
       libraries: ["places"]
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
