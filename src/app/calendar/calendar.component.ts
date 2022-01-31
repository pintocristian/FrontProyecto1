import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public events: any[];
  public options: any[];

  constructor() { }

  ngOnInit() {
    
    this.events=[
      {
        title:"Evento 1",
        start: new Date(),
        descriptoin: "Evento 1"
      },
      {
        title:"Evento 2",
        start: new Date(new Date().getTime()+86400000),
        descriptoin: "Evento 2"
      },
      {
        title:"Evento 3",
        start: new Date(new Date().getTime()+(86400000*2)),
        descriptoin: "Evento 3"
      }
    ]
  }

}
