import { Injectable } from '@angular/core';
import { ChoixBoisson, ITaille } from 'src/app/models/catalogue.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  tabQteBoisson: ChoixBoisson[] = [];
  qteTotalB: number = 0;
  constructor() {}

  updateQte(n: number) {
    return (this.qteTotalB += n);
  }

  recupBoisson(tailles: ITaille[]) {
    tailles.forEach((taille) => {
      this.tabQteBoisson.push({
        qteTotal: taille.quantite,
        somQte: 0,
      });
    });
    console.log(this.tabQteBoisson);
  }

  isQteNormal(qteBoisson: ChoixBoisson) {
    if (qteBoisson.qteTotal <= qteBoisson.somQte) {
      return true;
    } else {
      return false;
    }
  }

  activePanierMenu(){
    let reponse=true;
    this.tabQteBoisson.forEach((el)=>{
      reponse = reponse && this.isQteNormal(el);
    })
    return reponse;
  }
}
