import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabCaidaLibreRoutingModule } from './lab-caida-libre-routing.module';
import { LabCaidaLibreComponent } from './lab-caida-libre.component';



@NgModule({
  declarations: [LabCaidaLibreComponent],
  imports: [
    CommonModule,
    LabCaidaLibreRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LabCaidaLibreModule { }
