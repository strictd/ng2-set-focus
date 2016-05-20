import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[setFocus]'
})
export class SetFocusDirective {

  constructor(public renderer: Renderer, public elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement, 'focus', []);
  }

}
