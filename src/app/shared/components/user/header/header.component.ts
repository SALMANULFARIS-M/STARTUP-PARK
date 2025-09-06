import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        }),
        animate('300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          style({
            transform: 'translateY(0)',
            opacity: 1
          })
        )
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          style({
            transform: 'translateY(-100%)',
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(@Inject(PLATFORM_ID) private platformId: object,
  ) { }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}


