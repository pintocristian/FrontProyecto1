import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/services.service';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {
  constructor(private authSvc:AuthService){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.user$.pipe(
      take(1),
      map((user)=> user && this.authSvc.isEstudiante(user)),
      tap(canEdit =>{
        if (!canEdit){
          window.alert('No puedes acceder a esta pestaña porque no haz iniciado sesión.')
        }
      })
    );
  }
  
}
