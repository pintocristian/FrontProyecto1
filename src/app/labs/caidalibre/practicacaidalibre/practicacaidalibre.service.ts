import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PracticacaidalibreService {
  private API_BASE = 'http://localhost:8080/post';

  constructor(private httpClient: HttpClient) { }


  descargar():Observable<any> {
    console.log('Descargó')
    return this.httpClient.get(`${this.API_BASE}/pdf`);

  }
}
