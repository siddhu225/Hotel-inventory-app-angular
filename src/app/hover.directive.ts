import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  @Input() color = 'red';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log('this.nativeElement', this.el.nativeElement);
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.color
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      'green'
    )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      'white'
    )
  }



}
