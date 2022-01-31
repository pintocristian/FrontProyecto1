import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanEditGuard } from './auth/guards/can-edit.guard';


const routes: Routes = [{
  path:'',
  redirectTo: '/home',
  pathMatch: 'full'
},
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)},
{ path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)},
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)}, //canActivate:[CanEditGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'labCaidaLibre', loadChildren: () => import('./calendars/lab-caida-libre/lab-caida-libre.module').then(m => m.LabCaidaLibreModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
