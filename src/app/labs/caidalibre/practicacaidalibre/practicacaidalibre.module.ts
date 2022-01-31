import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticacaidalibreRoutingModule } from './practicacaidalibre-routing.module';
import { PracticacaidalibreComponent } from './practicacaidalibre.component';


@NgModule({
  declarations: [PracticacaidalibreComponent],
  imports: [
    CommonModule,
    PracticacaidalibreRoutingModule
  ]
})
export class PracticacaidalibreModule { }
