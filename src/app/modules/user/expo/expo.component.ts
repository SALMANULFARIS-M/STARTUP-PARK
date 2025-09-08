import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FooterComponent } from '../../../shared/components/user/footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../shared/services/contact.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-expo',
  imports: [CommonModule, FooterComponent,ReactiveFormsModule],
  templateUrl: './expo.component.html',
  styleUrl: './expo.component.css'
})
export class ExpoComponent {
  openIndex: number | null = null;
  registerForm!: FormGroup;
  isSubmitting = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
    private fb: FormBuilder,
    private contactService: ContactService,
    private toast: ToastService) { }
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

ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.registerForm  = this.fb.group({
         name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/), // Valid Indian mobile number
        ],
      ],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      });
    }
  }

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

onSubmit(): void {

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    this.contactService.submitExpoContactForm(this.registerForm.value).subscribe({
      next: () => {
        this.toast.showSuccess('Thank you! Your response has been saved.');
        this.registerForm.reset();
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error("Error submitting form", err);
        this.toast.showError('Something went wrong. Please try again.');
        this.isSubmitting = false;
      }
    });
  }

}
