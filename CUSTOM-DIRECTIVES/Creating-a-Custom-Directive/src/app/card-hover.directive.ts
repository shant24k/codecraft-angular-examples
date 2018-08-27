import { Directive, Input, HostBinding, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  @Input("appCardHover")
  config: any = {
    querySelector: ".card-text"
  };

  @HostBinding("class.border-success") private ishovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#ebebeb'); 
  }

  @HostListener("mouseover")
  onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, "display", "block");
    this.ishovering = true;
  }

  @HostListener("mouseout")
  onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, "display", "none");
    this.ishovering = false;
  }

}
