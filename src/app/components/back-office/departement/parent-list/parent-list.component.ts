import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/models/departement';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {
  listdep: Departement[];
   departSearch: string;

  constructor(private depService: DepartementService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.depService.getAlldepartements().subscribe({
      next: (data) => {
        this.listdep = data;

      },
      error: (err) => {
        console.log("err :" + err)

      }
    })

  }
  deleteDepart(departement: Departement, i: number) {

    this.depService.DeleteDep(departement.idDepart).subscribe({
      next: () => {
        this.listdep.splice(i, 1);
        this.toastr.success('departement has been deleted successfully','Success');
      }, error: (err) => {
        console.log("err" + err);
        this.toastr.error('something went wrong !','Error');

      }
    })
  }
  gotoadd(){
this.router.navigate(['/backoffice/departement/addDepartement'])
  }

}
