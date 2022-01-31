import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticamovparabolicoRoutingModule } from './practicamovparabolico-routing.module';
import { PracticamovparabolicoComponent } from './practicamovparabolico.component';


@NgModule({
  declarations: [PracticamovparabolicoComponent],
  imports: [
    CommonModule,
    PracticamovparabolicoRoutingModule
  ]
})
export class PracticamovparabolicoModule { }
