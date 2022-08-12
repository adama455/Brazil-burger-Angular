import { Pipe, PipeTransform } from '@angular/core';
import { GetCommande} from 'src/app/models/commande';

@Pipe({
  name: 'filterZone',
})
export class FilterZonePipe implements PipeTransform {
  transform(commandes: GetCommande[], idZone: number): GetCommande[] {

    let tab: GetCommande[] = []; //tableau de commande
    commandes.forEach((cmd:GetCommande) => {
      if (cmd.zone.id == idZone) {
        //si la zone qui se trouve dans commande est = à nom de la zone
        tab.push(cmd);
        // console.log(cmd);
      }
    });
    return tab;
  }
}
