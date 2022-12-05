import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/core/models/entreprise';
import { EntrepriseService } from 'src/app/core/services/entreprise.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {
  entreprise: Entreprise;
  listEntp : Entreprise[];
  public length: number;
  public page = 1;
  public pageSize=6;
  searchText: any;
  constructor( private toastr: ToastrService,private EntpServ: EntrepriseService,private router: Router) { }

  ngOnInit(): void {
    this.EntpServ.getAllEntreprises().subscribe(
      (data)=>{this.listEntp = data},
      ()=> {},
      ()=> {this.length = this.listEntp.length},
      );

      
     
    
  }
  delete(entreprise: Entreprise) {
    if(confirm("Are you sure to delete "+entreprise.nom)) {
      this.EntpServ.deleteEntreprise(entreprise.idEntreprise).subscribe(
        {
          next: () => {
            let i = this.listEntp.indexOf(entreprise)
            this.listEntp.splice(i, 1);
            this.toastr.success(entreprise.nom+' has been deleted successfully','Success');
          }, error: (err) => {
            console.log("err" + err);
            this.toastr.error('something went wrong !','Error');
    
          }
        }
      )
     
      

    }
  }
  Back() {
    this.router.navigate(['/backoffice'])
  }

}
