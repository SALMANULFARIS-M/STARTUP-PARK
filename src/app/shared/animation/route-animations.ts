import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set position context
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ], { optional: true }),

    // Start enter component transparent
    query(':enter', [style({ opacity: 0, transform: 'translateY(20px)' })], { optional: true }),

    group([
      // Leave animation
      query(':leave', [
        animate('400ms ease', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ], { optional: true }),

      // Enter animation
      query(':enter', [
        animate('500ms 150ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true }),
    ])
  ])
]);
