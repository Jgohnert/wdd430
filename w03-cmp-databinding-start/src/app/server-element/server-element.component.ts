import { 
  Component, 
  Input, 
  ViewEncapsulation, 
  OnInit, OnChanges, 
  SimpleChanges,
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  ViewChild,
  ElementRef,
  ContentChild

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  // hides the angular assigned CSS attributes. And overrides the CSS, 
  // that way, CSS in this file can be applied project wide.
  encapsulation: ViewEncapsulation.Emulated // you can also use None or Native to override
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element!: {type: string, name: string, content: string};
  @Input() name!: string;
  @ViewChild('heading', {static: true}) header!: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph!: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  // Gets called when Angular detects any changes.
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  // It's only called once. 
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
