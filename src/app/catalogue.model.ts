// Type personnalisé par class
export interface IBurger{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    // burger:IBurger[],
}
export interface IMenu{
    id:number,
    nom:string,
    image:string,
    description: string,
    prix:number,
    // burger:IBurger[],
}
export interface ICatalogue{
    menu:IMenu[],
    burger:IBurger[]
}

// interface IBurger{
//     nom:string,
//     image?:string,
//     prix:number,
// }
// interface ICatalogue{
//     menus:IMenu[],
//     burgers:IBurger[],
// }

// let burger1:IBurger={
//     nom:"burger Simple",
//     image:"dfghjkldf",
//     prix:1500,
// }
// console.log(burger1.nom);
