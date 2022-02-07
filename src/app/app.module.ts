import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/services.service';
import { CanEditGuard } from './auth/guards/can-edit.guard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { VincularMateriaComponent } from './vincular-materia/vincular-materia.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StreamingComponent } from './streaming/streaming.component';


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
    NavbarComponent,
    VincularMateriaComponent,
      CalendarComponent,
      StreamingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AuthService, CanEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
