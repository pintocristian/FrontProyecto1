import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080/post';

@Component({
  selector: 'app-practicacaidalibre',
  templateUrl: './practicacaidalibre.component.html',
  styleUrls: ['./practicacaidalibre.component.scss']
})
export class PracticacaidalibreComponent implements OnInit {

  constructor(private authSvc:AuthService, private router:Router, private http: HttpClient) { }
  public user$: Observable<any> = this.authSvc.afAuth.user;
  ngOnInit(): void {
  }

  descargar(){
    console.log('Descargó')
    return this.http.get('$(API_BASE)/pdf');
    
}
}
