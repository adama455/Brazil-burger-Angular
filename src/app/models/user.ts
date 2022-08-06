import { GetCommande } from "./commande"

export interface IClient{
    id: number,
    nom: string,
    prenom: string
    telephone: string,
    login: string,
    a_deja_commander:boolean,
    commandes:GetCommande[]

}