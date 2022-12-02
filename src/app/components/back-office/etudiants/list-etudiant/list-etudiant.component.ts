import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/core/models/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';



@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  etudiant: Etudiant;
  listEtud : Etudiant[];
  public length: number;
  public page = 1;
  public pageSize=15;
  searchText: any;
  constructor(private etudServ: EtudiantService,private router: Router) { }

  ngOnInit(): void {
    this.etudServ.getAllEtudiants().subscribe(
      (data)=>{this.listEtud = data},
      ()=> {},
      ()=> {this.length = this.listEtud.length},
      );
  }

  deleteEtudiant(etudiant: Etudiant) {
    if(confirm("Are you sure to delete "+etudiant.nomE)) {
      this.etudServ.deleteEtudiant(etudiant.idEtudiant).subscribe()
      location.reload();
      
    }
  }
  Back() {
    this.router.navigate(['/backoffice'])
  }
}
