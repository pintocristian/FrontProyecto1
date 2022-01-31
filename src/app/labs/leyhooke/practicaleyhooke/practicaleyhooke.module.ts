import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticaleyhookeRoutingModule } from './practicaleyhooke-routing.module';
import { PracticaleyhookeComponent } from './practicaleyhooke.component';


@NgModule({
  declarations: [PracticaleyhookeComponent],
  imports: [
    CommonModule,
    PracticaleyhookeRoutingModule,
  ],schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class PracticaleyhookeModule { }
