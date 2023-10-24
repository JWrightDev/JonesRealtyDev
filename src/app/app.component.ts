import {AfterViewInit, Component, OnInit} from '@angular/core';
import { initTE, Collapse, Sticky } from "tw-elements";
import * as CookieConsent from "vanilla-cookieconsent";
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError, ChildrenOutletContexts
} from '@angular/router'
import {loadingTransition, routerTransition,} from "./router.animations";


@Component({
    selector: 'app-root',
    animations: [routerTransition, loadingTransition],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  loading: boolean = true;


  constructor(private router: Router, private contexts: ChildrenOutletContexts) {

  }

  ngOnInit() {
    initTE({Collapse, Sticky});
    // setTimeout(() =>{
    //   this.loading = !this.loading;
    // }, 1500);
  }

  getState(outlet: any){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }


  ngAfterViewInit() {
    CookieConsent.run({
      root: '#cc',
      autoShow: true,
      // disablePageInteraction: true,
      // hideFromBots: true,
      // mode: 'opt-in',
      // revision: 0,

      cookie: {
        //name: 'cc_cookie',
        //domain: location.hostname,
        //path: '/',
        // sameSite: "Lax",
        expiresAfterDays: 30,
      },

      // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
      guiOptions: {
        consentModal: {
          layout: 'cloud inline',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true,
          flipButtons: false
        }
      },

      onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired',cookie);
      },

      onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie)
      },

      onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);
      },

      onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
      },

      onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
      },

      onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
      },

      categories: {
        necessary: {
          enabled: true,  // this category is enabled by default
          readOnly: true  // this category cannot be disabled
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,   // regex: match all cookies starting with '_ga'
              },
              {
                name: '_gid',   // string: exact cookie name
              }
            ]
          },

          // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
          services: {
            ga: {
              label: 'Google Analytics',
              onAccept: () => {},
              onReject: () => {}
            },
          }
        },
        ads: {}
      },

      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'We use cookies',
              description: 'Cookies help us improve the experience on our website. By using our website, you agree to the use of cookies. If you reject the use of cookies, only the required cookies will be used to keep the website functional.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage Individual preferences',
              // closeIconLabel: 'Reject all and close modal',
            },
            preferencesModal: {
              title: 'Manage cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Accept current selection',
              closeIconLabel: 'Close modal',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title: 'Your Privacy Choices',
                  description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
                },
                {
                  title: 'Strictly Necessary',
                  description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                  //this field will generate a toggle linked to the 'necessary' category
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Third-Party Cookies',
                  description: 'These cookies are created by third-party services such as google. They can be used to track your usage or other analytics.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'More information',
                  description: 'None of the cookies implemented by us are used to store you data, share your data, or track your usage. Third-party cookies may be used to track your usage, store your data, or share your data.'
                }
              ]
            }
          }
        }
      }
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
