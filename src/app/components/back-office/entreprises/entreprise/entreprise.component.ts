import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Entreprise } from 'src/app/core/models/entreprise';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  @Input() entreprise:Entreprise;
 @Output() notification: EventEmitter<Entreprise> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  notifyParent(){
    this.notification.emit(this.entreprise)
  }

}
