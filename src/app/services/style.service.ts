import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  setStyles(elements: HTMLElement[], styleProperty: string, value: string) {
    elements.forEach((element: HTMLElement) => {
      element.style[styleProperty as any] = value;
    });
  }

  wrapperHeight(windowHeight: number) {
    const elementsToUpdate = [
      'full-page-content-container',
      'dashboard-content-container',
      'dashboard-sidebar-inner',
      'dashboard-container',
      'full-page-container',
       
    ];

    elementsToUpdate.forEach(elementClass => {
      const elements = document.querySelectorAll('.' + elementClass);
      this.setStyles(Array.from(elements) as HTMLElement[], 'height', windowHeight + 'px');
    });
    this.setStyles(
      Array.from(document.querySelectorAll('.dashboard-content-inner')) as HTMLElement[],
      'min-height',
      windowHeight + 'px'
    );
  }
}
