import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {
  @HostListener('click')
  onClick() {
      return window.alert('ai apasat pe buton');
  }

}
