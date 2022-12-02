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
      this.EntpServ.deleteEntreprise(entreprise.idEntreprise).subscribe()
      this.toastr.success(entreprise.nom+' has been deleted !','Success')

      location.reload();
      

    }
  }
  Back() {
    this.router.navigate(['/backoffice'])
  }

}
