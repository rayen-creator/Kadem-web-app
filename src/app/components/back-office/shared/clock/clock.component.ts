import { Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }
  
  dateTime: Observable<Date>

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date();
      })
    )

  }

}
