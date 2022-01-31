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
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule), canActivate:[CanEditGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'practicacaidalibre', loadChildren: () => import('./labs/caidalibre/practicacaidalibre/practicacaidalibre.module').then(m => m.PracticacaidalibreModule) },
  { path: 'practicamovparabolico', loadChildren: () => import('./labs/movparabolico/practicamovparabolico/practicamovparabolico.module').then(m => m.PracticamovparabolicoModule) },
  { path: 'practicaleyhooke', loadChildren: () => import('./labs/leyhooke/practicaleyhooke/practicaleyhooke.module').then(m => m.PracticaleyhookeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
