import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [AuthService]
})
export class InicioComponent {

  constructor(private authSvc:AuthService) { }
  
  public user$: Observable<any> = this.authSvc.afAuth.user;
  ngOnInit(): void {
  }

}