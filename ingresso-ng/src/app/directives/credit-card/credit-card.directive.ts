import { Directive, ElementRef, HostListener, Input } from '@angular/core';

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
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('input') onInput() {
    if (!this.checkIsAcceptable()) {
      this.el.nativeElement.value = this.removeLastKey();
    } else {
      if (this.getValueLength() < 19) {
        this.el.nativeElement.value = this.applyMask();
      }
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

  private applyMask() {

    if (this.getValueLength(true) % 4 == 0) {
      return this.el.nativeElement.value += '.';
    }

    return this.el.nativeElement.value;

  }

}
