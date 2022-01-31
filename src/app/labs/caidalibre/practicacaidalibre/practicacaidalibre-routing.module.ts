import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticacaidalibreComponent } from './practicacaidalibre.component';

const routes: Routes = [{ path: '', component: PracticacaidalibreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticacaidalibreRoutingModule { }
