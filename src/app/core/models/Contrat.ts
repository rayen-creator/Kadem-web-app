import { Specialite } from './Specialite';

export class Contrat {
  id_contrat: number;
  archive: boolean;
  dateDebutContrat: Date;
  dateFinContrat: Date;
  montantContrat: number;
  specialite: Specialite;
}
