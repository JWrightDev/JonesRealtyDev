import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from "@angular/animations";

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    style({ position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%', opacity: 0 })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('1s ease-out', style({ left: '0%', opacity: 1})),
      ], { optional: true }),
      query('@*', animateChild(), { optional: true })
    ]),
  ])
]);

export const loadingTransition = trigger('loadingTransition', [
  state('void', style({opacity: 1, display: 'block'})),
  state('*', style({opacity: 0, display: 'none'})),
  transition('void => *', animate('1500ms ease-in')),
  transition('* => void', animate('1500ms ease-out'))
]);
