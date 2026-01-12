import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontcolorChange]'
})
export class FontcolorChange {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter')
  ChangeFontColor(){
    this.el.nativeElement.style.color = 'yellow'
  }

   @HostListener('mouseleave')
  RemoveFontColor(){
    this.el.nativeElement.style.color = 'black'
  }
}
