import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  viewDate: Date = new Date();
  
  constructor() { }
 
  ngOnInit(): void {
  }

}
