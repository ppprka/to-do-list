import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[colorType]'
})
export class ColorDirective implements OnChanges{

  @Input() colorType: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", `#${this.colorType}`)
  }
}
