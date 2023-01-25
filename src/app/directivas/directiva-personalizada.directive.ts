import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada]'
})
export class DirectivaPersonalizadaDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef
  ) {
    renderer.setStyle(elementRef.nativeElement, 'background-color', 'yellow');
    renderer.setStyle(elementRef.nativeElement, 'text-align', 'center');
    renderer.setStyle(elementRef.nativeElement, 'width', '50%');
    renderer.setStyle(elementRef.nativeElement, 'margin', 'auto');
  }

}
