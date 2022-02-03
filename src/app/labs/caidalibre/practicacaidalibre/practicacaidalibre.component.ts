import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/services.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-practicacaidalibre',
  templateUrl: './practicacaidalibre.component.html',
  styleUrls: ['./practicacaidalibre.component.scss']
})
export class PracticacaidalibreComponent implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) { }
  public user$: Observable<any> = this.authSvc.afAuth.user;
  ngOnInit(): void {
    this.descargar();
  }

  descargar() {
    this.authSvc.descargar();
  }


}
