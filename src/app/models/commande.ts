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
}

export interface Commande {
  produits: FormatCmde[];
}
export interface FormatCmde {
  quantiteCmde: number;
  produit: string;
}
