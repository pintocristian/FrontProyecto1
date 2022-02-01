import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { PracticacaidalibreService } from './practicacaidalibre.service';




@Component({
  selector: 'app-practicacaidalibre',
  templateUrl: './practicacaidalibre.component.html',
  styleUrls: ['./practicacaidalibre.component.scss']
})
export class PracticacaidalibreComponent implements OnInit {

  constructor(private authSvc:AuthService, private router:Router, private PracticacaidalibreService: PracticacaidalibreService) { }
  public user$: Observable<any> = this.authSvc.afAuth.user;
  ngOnInit(): void {
    this.descargar();
  }

  descargar() {
    this.PracticacaidalibreService.descargar();
  }


}
