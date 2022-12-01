import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/app/core/models/departement';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {
  Departements: Departement[];
  @Input() dep  : Departement 
  @Input() SearchedDep :string
  @Output() notification: EventEmitter<Departement> = new EventEmitter()
  constructor(private router:Router) { }

  ngOnInit(): void {
 
  }
  notifyDelete() {
    this.notification.emit(this.dep)
  }
 
  gotoedit(d:Departement){
    this.router.navigate(['/backoffice/departement/update',d.idDepart])

  }
}
