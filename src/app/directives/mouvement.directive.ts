import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouvement]'
})
export class MouvementDirective {

  @Input("appMouvement") couleur!: string;
  constructor(private el:ElementRef) {

  }

  @HostListener("onmouseenter") onMouseEnter() {
    this.changerCouleur(this.couleur);
  }
  @HostListener("onmouseleave") onMouseLeave() {
    this.changerCouleur("white");
  }
  changerCouleur(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
