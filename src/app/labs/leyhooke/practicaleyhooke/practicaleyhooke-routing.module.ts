import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticaleyhookeComponent } from './practicaleyhooke.component';

const routes: Routes = [{ path: '', component: PracticaleyhookeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticaleyhookeRoutingModule { }
