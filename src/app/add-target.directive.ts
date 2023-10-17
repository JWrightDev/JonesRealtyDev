import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
    selector: '[appAddTarget]'
})
export class AddTargetDirective {
    public mobileLogo: any;

    constructor(private elem: ElementRef) {
        this.mobileLogo = document.getElementById('mobileLogo');
    }

    @HostListener('click', ['$event.target'])
    onClick() {
        if (!(this.mobileLogo.hasAttribute("data-te-target"))) {
            this.mobileLogo.removeAttribute('data-te-target');
        } else {
            this.mobileLogo.setAttribute('data-te-target', '#menu');
        }
    }
}
