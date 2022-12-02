import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ContratService } from 'src/app/core/services/contrat.service';
@Component({
  selector: 'app-affecter-etudiant',
  templateUrl: './affecter-etudiant.component.html',
  styleUrls: ['./affecter-etudiant.component.css'],
})
export class AffecterEtudiantComponent implements OnInit {
  data: any;
  keyword: any = 'prenomE';
  @Input() ContratId: any;
  @Output() newStudentAssigned = new EventEmitter();
  tempStudent: any;
  constructor(private contratService: ContratService) {}

  ngOnInit(): void {
    this.contratService.DisplayStudents().subscribe((res) => {
      this.data = res;
    });
    console.log(this.ContratId);
  }

  selectEvent(item: any) {
    // do something with selected item
    console.log(item);
    this.tempStudent = item;
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: any) {
    // do something when input is focused
  }
  affecter() {
    this.contratService
      .addcontratToEtudiant(this.tempStudent.idEtudiant, this.ContratId)
      .subscribe((r) => {
        if (typeof r === 'number') {
          this.newStudentAssigned.emit(this.tempStudent);
        }
        //console.log(typeof r);
      });
  }
}
