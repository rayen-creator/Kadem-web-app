import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Profesor} from "../../../../core/models/profesor";

@Component({
  selector: 'app-profesors', templateUrl: './profesors.component.html', styleUrls: ['./profesors.component.css']
})
export class ProfesorsComponent implements OnInit {
  @Input() profesor: Profesor;
  @Output() notification: EventEmitter<Profesor> = new EventEmitter();

  choice: string;

  constructor() {
  }

  ngOnInit(): void {

  }

  notifyParent() {
    this.notification.emit(this.profesor);

  }
}
