import { ElementRef, Renderer } from '@angular/core';
export declare class SetFocusDirective {
    renderer: Renderer;
    elementRef: ElementRef;
    constructor(renderer: Renderer, elementRef: ElementRef);
    ngAfterViewInit(): void;
}
