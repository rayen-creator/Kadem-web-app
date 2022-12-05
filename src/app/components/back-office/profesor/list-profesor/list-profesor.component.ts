import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProfesorService} from "../../../../core/services/profesor.service";
import {Profesor} from "../../../../core/models/profesor";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-profesor',
  templateUrl: './list-profesor.component.html',
  styleUrls: ['./list-profesor.component.css']
})
export class ListProfesorComponent implements OnInit {


  @Input() choice: string;

  public profesorr: Profesor;
  public all: Profesor[];
  public pageSize = 6;
  searchText: any;
  p: number = 1;
  lengthTable: number;


  constructor(private profesorService: ProfesorService, private route: ActivatedRoute, private router: ActivatedRoute, private toastr:ToastrService) {
  }

  ngOnInit(): void {


    this.profesorService.getAllProfesor().subscribe({
      next: (data: Profesor[]) => {
        this.all = data;


      }, error: (err) => {
        console.log('error' + err);

      }, complete: () => {
        this.lengthTable = this.all.length;

      }
    });


  }

  Delete(profesor: Profesor) {
    let i = this.all.indexOf(profesor);
    this.profesorService.delete(profesor.idProfesseur).subscribe(() => {
      this.all.splice(i, 1)
    });
    this.toastr.success('Professor deleted');
  }


}
