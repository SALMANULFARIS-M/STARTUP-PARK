// src/app/animations/route-animations.ts
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  animateChild,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  // Forward slide (right → left)
  transition('HomePage => AboutPage, HomePage => ExpoPage, HomePage => ContactPage, AboutPage => ExpoPage, AboutPage => ContactPage, ExpoPage => ContactPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%', top: 0, left: 0 })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('500ms ease', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease', style({ transform: 'translateX(0)', opacity: 1 })),
        query('@*', animateChild())
      ], { optional: true })
    ])
  ]),

  // Backward slide (left → right)
  transition('ContactPage => ExpoPage, ContactPage => AboutPage, ContactPage => HomePage, ExpoPage => AboutPage, ExpoPage => HomePage, AboutPage => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%', top: 0, left: 0 })
    ], { optional: true }),
    query(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 })
    ], { optional: true }),
    group([
      query(':leave', [
        animate('500ms ease', style({ transform: 'translateX(100%)', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('500ms ease', style({ transform: 'translateX(0)', opacity: 1 })),
        query('@*', animateChild())
      ], { optional: true })
    ])
  ]),

  // Fallback fade (for anything else)
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%', top: 0, left: 0 })
    ], { optional: true }),
    query(':enter', [ style({ opacity: 0 }) ], { optional: true }),
    group([
      query(':leave', [
        animate('300ms ease', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease', style({ opacity: 1 })),
        query('@*', animateChild())
      ], { optional: true })
    ])
  ])
]);
