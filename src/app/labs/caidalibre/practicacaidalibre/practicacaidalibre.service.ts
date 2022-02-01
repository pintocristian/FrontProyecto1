import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_BASE = 'http://localhost:8080/post';

@Injectable({
  providedIn: 'root'
})
export class PracticacaidalibreService {

  constructor(private http: HttpClient) { }


  descargar() {
    console.log('Descargó')
    return this.http.get('$(API_BASE)/pdf');

  }
}
