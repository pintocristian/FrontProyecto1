import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaCalComponent } from './prueba-cal.component';

const routes: Routes = [{ path: '', component: PruebaCalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaCalRoutingModule { }
