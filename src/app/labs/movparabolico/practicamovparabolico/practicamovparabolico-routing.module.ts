import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticamovparabolicoComponent } from './practicamovparabolico.component';

const routes: Routes = [{ path: '', component: PracticamovparabolicoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticamovparabolicoRoutingModule { }
