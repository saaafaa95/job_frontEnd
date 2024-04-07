import { Component, ElementRef, AfterViewInit, Renderer2 , HostListener } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngAfterViewInit(): void {
   /// this.wrapperHeight();
  }

  isActive : any = false ; 

  addActiveClass(){
    if(this.isActive) this.isActive = false ;
    else this.isActive = true ;
  }

  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {
   // this.wrapperHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
  //  this.wrapperHeight();
  }

  wrapperHeight() {
    //const headerHeight = this.elementRef.nativeElement.querySelector('#header-container').offsetHeight;
    const windowHeight = window.innerHeight - 76;
    console.log(windowHeight)
    const elementsToUpdate = [
      'full-page-content-container',
      'dashboard-content-container',
      'dashboard-sidebar-inner',
      'dashboard-container',
      'full-page-container'
    ];

    elementsToUpdate.forEach(elementClass => {
      this.setStyle(elementClass, 'height', windowHeight + 'px');
    });

  }

  private setStyle(elementClass: string, styleProperty: string, value: string) {
    const elements = this.elementRef.nativeElement.querySelectorAll('.' + elementClass);
    elements.forEach((element: HTMLElement) => {
      element.style[styleProperty as any] = value;
    });
  }
 

  private adjustScrollbar(): void {
    const sidebarElement = this.elementRef.nativeElement;
    const headerHeight = document.getElementById('header-container')?.offsetHeight || 0;
    const windowHeight = window.innerHeight - headerHeight;
    const sidebarContainer = sidebarElement.querySelector('.sidebar-container, .dashboard-nav-container');

    if (sidebarContainer) {
      const sidebarContainerHeight = sidebarContainer.offsetHeight || 0;

      if (sidebarContainerHeight > windowHeight) {
        this.renderer.setStyle(sidebarElement, 'height', `${windowHeight}px`);
      } else {
        const scrollbarTrack = sidebarElement.querySelector('.simplebar-track') as HTMLElement;
        if (scrollbarTrack) {
          scrollbarTrack.style.display = 'none';
        }
      }
    }
  }
}
