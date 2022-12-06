import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Universite } from 'src/app/core/models/universite';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() universite : Universite;
 @Output() notification: EventEmitter<Universite> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
