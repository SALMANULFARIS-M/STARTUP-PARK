import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, DOCUMENT } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(PLATFORM_ID) private platformId: Object) {}

  init() {
    if (isPlatformBrowser(this.platformId)) {
      const gtagScript = this.document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-VKL382ZTGF';
      this.document.head.appendChild(gtagScript);

      const inlineScript = this.document.createElement('script');
      inlineScript.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VKL382ZTGF');
      `;
      this.document.head.appendChild(inlineScript);
    }
  }
}
