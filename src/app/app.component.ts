import {Component, OnInit} from '@angular/core';
import {initTE, Collapse} from "tw-elements";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        initTE({Collapse});
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
