import { Directive, ElementRef, HostListener } from '@angular/core';

const acceptKeys = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('input') onInput() {
    if (!this.checkIsAcceptable()) {
      this.el.nativeElement.value = this.removeLastKey();
    }
  }

  private checkIsAcceptable() {
    return acceptKeys.includes(this.getLastKey());
  }

  private getLastKey() {
    return this.el.nativeElement.value[this.getValueLength() - 1];
  }

  private getValueLength(raw: boolean = false) {
    return raw ? this.el.nativeElement.value.replace(/[.]/g,'').length : this.el.nativeElement.value.length;
  }

  private removeLastKey() {
    return this.el.nativeElement.value.substr(0, this.getValueLength() -1);
  }

}
