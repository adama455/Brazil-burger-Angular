import { IZone } from "./catalogue.model";
import { IClient } from "./user";

export interface ICommande {
  reference: string;
  produits: IProduit[];
  dateCmde: Date;
  montantCommande: number;
}
export interface IProduit {
  quantiteCmde: number;
  produit: Produit;
}

export interface Produit {
  id: number;
  nom: string;
  image: string;
  description: string;
  prix: number;
  quantity:number;
}

export interface Commande {
  produits: FormatCmde[];
  zone: string;
}

export interface FormatCmde {
  quantiteCmde: number,
  produit: string,
}

export interface GetCommande{
  id:number
  produits: {quantiteCmde: number,produit:Produit}[],
  client:IClient,
  dateCmde:Date,
  montantCommande: number,
  reference:string,
  etat:string,
  zone: IZone
}
export enum EtatCommande{
  enAttente="enAttente",
  valider="valider",
  enCousDeLivraison="enCousDeLivraison",
  annuler="annuler",
  terminer="terminer",
  modifier="modifier"
}

export interface UpdateCommande{
  etat: string,
  produits:FormatCmde[]
  zone: string;
}
