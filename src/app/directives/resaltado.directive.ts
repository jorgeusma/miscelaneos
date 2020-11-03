import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('directiva llamada');
    //this.el.nativeElement.style.backgroundColor="yellow";
   }

   @Input("appResaltado") nuevoColor: string;

   @HostListener('mouseenter') mouseEntro() {
     this._resaltar(this.nuevoColor || 'yellow');
   }

   @HostListener('mouseleave') mouseSalio() {
    this._resaltar(null);
 }

 private _resaltar(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
 }

}
