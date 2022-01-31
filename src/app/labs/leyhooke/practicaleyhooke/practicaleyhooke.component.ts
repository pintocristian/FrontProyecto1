import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-practicaleyhooke',
  templateUrl: './practicaleyhooke.component.html',
  styleUrls: ['./practicaleyhooke.component.scss']
})
export class PracticaleyhookeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarPlugins = [dayGridPlugin];

}
