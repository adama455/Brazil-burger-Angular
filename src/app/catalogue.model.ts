// Type personnalisé par class
export interface IBurger{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    quantite:number
}

export interface IBoisson{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    quantite:number
}
export interface IFrite{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    quantite:number
}
export interface IMenu{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    quantite:number,
    burgers:IBurger[],
    boissons:IBoisson[],
    firtes:IFrite[],

}
export interface IComplement{
    frites:IFrite[],
    boissons:IBoisson[],
}
export interface ICatalogue{
    menus:IMenu[],
    burgers:IBurger[]
}

