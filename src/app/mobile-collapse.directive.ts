import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
    selector: '[appMobileCollapse]'
})
export class MobileCollapseDirective implements OnInit {
    public screenWidth: any;


    constructor(private elem: ElementRef) {
        this.elem.nativeElement.setAttribute('data-te-collapse-init', '');
    }

    ngOnInit() {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 1023) {
            if (this.elem.nativeElement == document.getElementsByClassName('nav-item')) {
                this.elem.nativeElement.setAttribute('data-te-target', '#menu');
            } else {
                return
            }
        } else {
            this.elem.nativeElement.removeAttribute('data-te-target');
        }
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 1023) {
            if (this.elem.nativeElement == document.getElementsByClassName('nav-item')) {
                this.elem.nativeElement.setAttribute('data-te-target', '#menu');
            } else {
                return
            }
        } else {
            this.elem.nativeElement.removeAttribute('data-te-target');
        }
    }

}
