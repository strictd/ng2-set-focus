import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
export declare class SetFocusDirective implements AfterViewInit {
    renderer: Renderer;
    elementRef: ElementRef;
    constructor(renderer: Renderer, elementRef: ElementRef);
    ngAfterViewInit(): void;
}
