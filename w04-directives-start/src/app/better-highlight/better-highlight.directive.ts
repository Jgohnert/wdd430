// This is a better approach to changing the DOM

import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightblue';
  

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.color') color: string = 'darkblue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'darkblue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'darkblue');

    // Another example of how you can manipulate the DOM like the commented code above
    this.backgroundColor = this.highlightColor;
    this.color = 'darkblue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }
}
