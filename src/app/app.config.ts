import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
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
  importProvidersFrom(BrowserAnimationsModule), provideAnimations(),
  provideRouter(routes), provideClientHydration(withEventReplay()),
  importProvidersFrom(LucideAngularModule.pick(lucideIcons)),
  provideHttpClient(withFetch()),
  ]
};
