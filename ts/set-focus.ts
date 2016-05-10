/// <reference path = "typings/auto.d.ts" />

import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[setFocus]'
})
export class SetFocusDirective {

  constructor(private el: ElementRef) {
    setTimeout(function() {
      let end = el.nativeElement.value.length;

      if (typeof el.nativeElement.selectionStart !== 'undefined') {
        el.nativeElement.selectionStart = end;
        el.nativeElement.selectionEnd = end;
      }
    }, 0);
  }

}
