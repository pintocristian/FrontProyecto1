import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/services/auth.service';
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { HttpClientModule } from '@angular/common/http';

export const firebaseConfig = {
  apiKey: "AIzaSyA2UOlTpZz8wN-4m-bAlFQAibGlcwA4rwQ",
  authDomain: "proyecto1-ng-e93af.firebaseapp.com",
  projectId: "proyecto1-ng-e93af",
  storageBucket: "proyecto1-ng-e93af.appspot.com",
  messagingSenderId: "687269663353",
  appId: "1:687269663353:web:988ad01424863261f47aa8"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule
    
  ],
  providers: [AuthService, CanEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
