import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { CalendarioComponent } from './calendario.component';


@NgModule({
  declarations: [CalendarioComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class CalendarioModule { }
