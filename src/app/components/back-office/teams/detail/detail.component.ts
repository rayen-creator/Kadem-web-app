import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TeamDetails} from "../../../../core/models/teamDetails";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() detail  : TeamDetails
  @Output() notification: EventEmitter<TeamDetails> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  notifyDeleteDetails() {
    this.notification.emit(this.detail)
  }
}
