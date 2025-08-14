import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  smoothScrollTo(targetId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  setupIntersectionObserver(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      document.querySelectorAll('.animate-slide-up').forEach(el => {
        const element = el as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease-out';
        observer.observe(element);
      });
    }
  }
}
