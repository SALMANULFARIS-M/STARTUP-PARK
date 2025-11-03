import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, ViewTransitionInfo } from '@angular/router';
import { UtilsService } from './shared/services/utils.service';
import { AnalyticsService } from './shared/services/analytics.service';
import { routeAnimations } from './shared/animation/route-animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(private analytics: AnalyticsService,
    @Inject(PLATFORM_ID) private platformId: object,
    private utils: UtilsService) { }

  ngOnInit() {
    this.analytics.init();
    if (isPlatformBrowser(this.platformId)) {

    }
  }

 // Optionally define transitions based on route data later
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }



  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  scrollTo(target: string): void {
    this.utils.smoothScrollTo(target);
  }

  ngOnDestroy() {
  }
}
