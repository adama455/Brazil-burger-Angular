import { IZone } from "../catalogue.model";

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
  client:string,
  dateCmde:Date,
  montantCommande: number,
  reference:string,
  etat:string,
  zone: IZone


}
