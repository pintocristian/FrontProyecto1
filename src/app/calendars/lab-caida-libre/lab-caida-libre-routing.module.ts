import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabCaidaLibreComponent } from './lab-caida-libre.component';

const routes: Routes = [{ path: '', component: LabCaidaLibreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabCaidaLibreRoutingModule { }
