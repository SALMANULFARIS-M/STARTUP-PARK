import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  MapPin, Mail, Phone, BookOpen, Briefcase, Code, Coffee, FlaskConical, Home, LucideAngularModule,
  Mic, Rocket, Scale, UserCheck, Users
} from 'lucide-angular';

const lucideIcons = {
  Home,
  FlaskConical,
  Mic,
  Users,
  Coffee,
  Rocket,
  UserCheck,
  Code,
  BookOpen,
  Scale,
  Briefcase,
  MapPin,
  Mail,
  Phone
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(
    routes, withViewTransitions(),
    withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ),
  provideClientHydration(withEventReplay()),
  importProvidersFrom(LucideAngularModule.pick(lucideIcons)),
  provideHttpClient(withFetch()),
  provideAnimations()
  ]
};
