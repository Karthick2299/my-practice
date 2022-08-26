import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[app-zoom]',
})
export class ZoomTask {
  constructor(private element: ElementRef) {}

  @HostListener('wheel', ['$event'])
  printSomething(event: WheelEvent) {
    let scrolling = event.deltaY;
    // console.log(scrolling);
    let width = this.element.nativeElement.style.width;
    console.log('width');
    console.log(width);
    let updatedValue: any;

    console.log('its also working');
    // this.element.nativeElement.scrollUp = this.element.nativeElement.style.height = "500px";

    let value = this.element.nativeElement.clientWidth;

    if (scrolling > 0) {
      updatedValue = parseInt(value) + 10;
    } else {
      updatedValue = parseInt(value) - 10;
    }

    this.element.nativeElement.style.width = updatedValue + 'px';
    this.element.nativeElement.style.height = updatedValue + 'px';

    console.log(updatedValue);
  }
}
