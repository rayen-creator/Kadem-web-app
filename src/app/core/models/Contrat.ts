import { Specialite } from './Specialite';

export class Contrat {
  idContrat!: number;
  archive!: boolean;
  dateDebutContrat!: Date;
  dateFinContrat!: Date;
  montantContrat!: number;
  specialite!: Specialite;
  etudiant!: any;
}

export interface IContratAjouter {
  archive: boolean;
  dateDebutContrat: Date;
  dateFinContrat: Date;
  montantContrat: number;
  specialite: Specialite;
}
