import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScro]'
})
export class ScroDirective {

  constructor(private elm:ElementRef) { }
  @HostListener('click') click(){
    this.elm.nativeElement.scrollTop=this.elm.nativeElement.scrollHeight;
  }

}
