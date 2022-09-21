import {Directive, ElementRef, HostListener, Injector} from "@angular/core";
import {NgControl} from "@angular/forms";


@Directive({
  selector: '[onlyNumber]',
})

export class OnlyNumberDirective {
  constructor(private elementRef: ElementRef,
              private injector: Injector) {
  }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    if (initialValue !== this.elementRef.nativeElement.value) {
      event.stopPropagation();
      const ngControl = this.injector.get<NgControl>(NgControl);
      if (ngControl && ngControl.control) {
        ngControl.control.setValue(this.elementRef.nativeElement.value);
      }
    }
  }
}
