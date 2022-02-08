import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarioComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
