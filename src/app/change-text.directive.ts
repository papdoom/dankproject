import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeText]'
})
export class ChangeTextDirective {

  constructor(Element: ElementRef) {
    console.dir(Element);
    Element.nativeElement.innerText="Shit ";
   }

}
