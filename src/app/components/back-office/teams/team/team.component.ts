import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Team} from "../../../../core/models/team";


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() team : Team
  @Output() notification: EventEmitter<Team> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  notifyDeleteTeam() {
    this.notification.emit(this.team)
  }
}
