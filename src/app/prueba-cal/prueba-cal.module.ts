import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaCalRoutingModule } from './prueba-cal-routing.module';
import { PruebaCalComponent } from './prueba-cal.component';

import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [PruebaCalComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    PruebaCalRoutingModule
  ]
})
export class PruebaCalModule { }
