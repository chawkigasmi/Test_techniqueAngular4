import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {AuthService} from './auth.service';
import { HttpClientModule } from '@angular/common/http';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ArticlesComponent } from './articles/articles.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
export const firebaseConfig = {
    apiKey: "AIzaSyDPvBr2aoKtqw_OWWtCEBwW2hmtXbXYkdE",
    authDomain: "testangular4-67da0.firebaseapp.com",
    databaseURL: "https://testangular4-67da0.firebaseio.com",
    projectId: "testangular4-67da0",
    storageBucket: "testangular4-67da0.appspot.com",
    messagingSenderId: "749923796025"
  };

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
