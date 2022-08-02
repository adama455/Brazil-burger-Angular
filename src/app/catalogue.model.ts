// Type personnalisé par class
export interface IBurger{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    quantity:number
}
export interface IFrite{
    id:number,
    nom:string,
    prix:number,
    description: string,
    image:string,
    // quantite:number
}
//la clé burgers qui est dans menu
export interface Burger{
    quatite:number;
    burger:IBurger,
}

//la clé burgers qui est dans menu
export interface Frite{
    frite:IFrite,
    quantite:number,
}

export interface IBoisson{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    // quantite:number
}
export interface Taille{
    tailleBoissons:ITailleBoisson[],
}
export interface ITailleBoisson{
    boisson:IBoisson,
    stock:number,
    prixBoisson:number,
}
export interface ITaille{
    taille:Taille,
    quantite:number,
}


export interface IMenu{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    burgers:Burger[],
    tailles:ITaille[],
    frites:Frite [],
    quantity:number,

}
export interface IComplement{
    boissons:IBoisson[],
    frites:IFrite[],
}
export interface ICatalogue{
    burgers:IBurger[],
    menus:IMenu[],
}

