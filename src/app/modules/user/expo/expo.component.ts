import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from '../../../shared/components/user/footer/footer.component';

@Component({
  selector: 'app-expo',
  imports: [CommonModule, FooterComponent],
  templateUrl: './expo.component.html',
  styleUrl: './expo.component.css'
})
export class ExpoComponent {
  openIndex: number | null = null;
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }
  faqs = [
    {
      question: 'Is there any registration fee for The Startup Expo?',
      answer: 'No, it’s completely free. But the stall allocation will be based on an evaluation process.'
    },
    {
      question: 'How does one register/get a stall booked at the Startup Expo?',
      answer: `<strong>Step 1:</strong> Registration: Click the ‘Register Now’ button and fill details.<br>
               <strong>Step 2:</strong> Call from the team: You will be contacted by our team regarding stalls and pricing.`
    },
    {
      question: 'Can I attend the expo as an individual or is it only for startup representatives?',
      answer: 'The expo is open to startups, entrepreneurs, investors, and enthusiasts. Only stalls will be given to startups and representatives.'
    },
    {
      question: 'What kind of startups will be showcased?',
      answer: 'Innovation across AI, Robotics, FoodTech, EduTech, HealthTech, AgriTech, and more.'
    }
  ];
  logos = [
    { src: 'https://iquecap.com/assets/iCAPL1-BJRziVhZ.png', alt: 'IQue Cap' },
    { src: 'https://www.incubenation.com/assets/incubenation1-CVPhxvG4.png', alt: 'incubenation' },
    { src: 'https://studyinbengaluru.com/sib_text.png', alt: 'Study in Bengaluru' },
    { src: 'https://www.ceosquare.in/c.png', alt: 'CEO Square' },
    { src: 'https://franchisify.in/assets/Franchisify.in-logo-white-png-(2)-DeohrdEG.png', alt: 'Franchisify' },
    { src: 'https://www.careercafe.co/careercafe_logo-transparent.png', alt: 'Career Cafe' },
    { src: 'https://www.flyrad.in/assets/FlyradLogo-B-TRSE68.png', alt: 'Flyrad' },
    { src: 'https://karumitra.in/assets/img/logo/logo.png', alt: 'Karumithra' },  ];

  toggleFaq(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
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
