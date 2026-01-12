import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBghighlighter]'
})
export class Bghighlighter {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
