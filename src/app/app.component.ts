import {Component, OnInit} from '@angular/core';
import {initTE, Collapse} from "tw-elements";
import {NavigationEnd, Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        initTE({Collapse});
        this.router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    addTarget() {
        const navItems = document.querySelectorAll('.nav-item');
        if (navItems) {
            navItems.forEach(navItem => {
                navItem.setAttribute("data-te-target", "#menu");
            });
        }
        return;
    }

    removeTarget() {
        const navItems = document.querySelectorAll('.nav-item');
        if (navItems) {
            navItems.forEach(navItem => {
                navItem.removeAttribute("data-te-target");
            });
        }
        return;
    }
}
