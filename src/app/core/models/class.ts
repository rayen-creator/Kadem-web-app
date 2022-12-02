import {Profesor} from "./profesor";
import {Student} from "./student";

export class Class{
  idClasse: number;
  nom: string;
  etudiants:Student[];
  professeurs:Profesor[];

}
