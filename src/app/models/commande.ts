import { IQuartier} from "./catalogue.model";
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
export interface IZone{
  id: number,
  nom: string,
  etat: number,
  prixDeLivraison:number,
  quartiers:IQuartier[],
  commandes:GetCommande[]
}

export interface GetCommande{
  id:number
  produits: {quantiteCmde: number,produit:Produit}[],
  client:IClient,
  dateCmde:Date,
  montantCommande: number,
  reference:string,
  etat:string,
  zone:{id: number,nom: string,etat: number},
}
export interface IGetCommande{
  id:number
  produits: {quantiteCmde: number,produit:Produit}[],
  client:IClient,
  dateCmde:Date,
  montantCommande: number,
  reference:string,
  etat:string,
  zone:{id:number, nom:string, etat:number},
}

export enum EtatCommande{
  enAttente="enAttente",
  valider="valider",
  enCours="enCours",
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
export interface ILivreur{
  id: number,
  nom: string,
  prenom: string
  telephone: string,
  login: string,
  matriculeMoto:string,
  is_disponible:boolean
  
}
export interface ILivraison{
  id:number
  commandes:GetCommande[],
  zone:IZone,
  livreur:ILivreur,
}
