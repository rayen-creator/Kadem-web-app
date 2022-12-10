import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Etudiant } from 'src/app/core/models/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import autoTable, { Column } from 'jspdf-autotable';



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
  date:Date;
  local:string;

  constructor( private toastr: ToastrService,private etudServ: EtudiantService,private router: Router) { }

  ngOnInit(): void {
    this.local= new Date().toLocaleDateString();
    
    this.etudServ.getAllEtudiants().subscribe(
      (data)=>{this.listEtud = data},
      ()=> {},
      ()=> {this.length = this.listEtud.length},
      );
  }
  

  
   
    
  
openPDF(c:Etudiant){  
 
  let doc = new jsPDF();
  doc.setFontSize(10);
  var img = new Image()
  img.src = 'assets/img/approved.jpg'
  var logo = new Image()
  logo.src = 'assets/img/logo.png'
  doc.setFillColor(135, 124,45,0);
  doc.text("université de Tunis",160,30);
  doc.addImage(logo,'jpg',2,5,40,30)
  doc.text("ATTESTATION DE PRÉSENCE",90,40);
  doc.text("\n\n\n\n\n\n\n\n",2,11);
  doc.text("Nous soussignés, l'université ESPRIT,attestons par la présence de "+c.nomE + " " +c.prenomE + " dans \n \n notre etablissemt : "+

  "\n\n Email:  "+c.email+"\n\n Option:  "+c.option,40,70);
doc.text("Fait à : "+ this.local,150,140);
doc.addImage(img,'jpg',140,150,40,30)
doc.output('dataurlnewwindow');
doc.save('Attestation de '+c.nomE + " " +c.prenomE+'.pdf')
this.toastr.success("Le pdf de l'etudiant : "+c.prenomE +' '+c.nomE +' est pret','Success');


}

  deleteEtudiant(etudiant: Etudiant) {
    if(confirm("Are you sure to delete "+etudiant.nomE)) {
      this.etudServ.deleteEtudiant(etudiant.idEtudiant).subscribe(
        {
          next: () => {
            let i = this.listEtud.indexOf(etudiant)
            this.listEtud.splice(i, 1);
            this.toastr.success(etudiant.nomE+' has been deleted successfully','Success');
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
