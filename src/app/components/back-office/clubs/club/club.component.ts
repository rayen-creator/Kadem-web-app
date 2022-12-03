import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Club} from "../../../../core/models/club";

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  @Input() club : Club
  @Output() notification: EventEmitter<Club> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  NotifyDeleteClub() {
    this.notification.emit(this.club)
  }
}
