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
  client:string,
}
