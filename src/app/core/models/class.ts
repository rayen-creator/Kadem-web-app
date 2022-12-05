import {Profesor} from "./profesor";
import {Etudiant} from "./etudiant";

export class Class{
  idClasse: number;
  nom: string;
  etudiants:Etudiant[];
  professeurs:Profesor[];

}
