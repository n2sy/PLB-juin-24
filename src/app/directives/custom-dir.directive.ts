import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bgColorByJenny; // = 'blue';
  @HostBinding('style.color') txtColor; // = 'red';
  constructor(public elementRef: ElementRef) {
    console.log(elementRef);
  }
  @HostListener('mouseenter') mouseenter() {
    this.bgColorByJenny = 'grey';
    this.txtColor = 'white';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bgColorByJenny = 'pink';
    this.txtColor = 'black';
  }
}
