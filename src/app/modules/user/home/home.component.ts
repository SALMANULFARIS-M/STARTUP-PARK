import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/user/header/header.component';
import { FooterComponent } from '../../../shared/components/user/footer/footer.component';
import { LucideAngularModule } from 'lucide-angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../shared/services/contact.service';
import { ToastService } from '../../../shared/services/toast.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, FooterComponent, LucideAngularModule, ReactiveFormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private timerInterval: any;
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private fb: FormBuilder,
    private contactService: ContactService,
    private toast: ToastService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[0-9]{10}$/) // ✅ exactly 10 digits
          ],
        ],
        company: ['', Validators.required],
        message: ['']
      });
      this.startCountdown();
    }
  }

  ecosystem = [
    { title: 'Co-working Zones', icon: 'Home' },
    { title: 'Innovation Labs', icon: 'FlaskConical' },
    { title: 'Event Halls & Demo Stages', icon: 'Mic' },
    { title: 'Networking Lounges', icon: 'Users' },
    { title: 'Food Courts & Coffee Bars', icon: 'Coffee' },
    { title: 'Incubator & Accelerator', icon: 'Rocket' },
    { title: 'Mentoring Programs', icon: 'UserCheck' },
    { title: 'Development Programs', icon: 'Code' },
    { title: 'Business Schools & Masterclasses', icon: 'BookOpen' },
    { title: 'Startup Legal Help', icon: 'Scale' },
  ];

  stats = [
    { value: '200+', label: 'Startups Supported', icon: 'users' },
    { value: '₹600 Cr+', label: 'Funding Accessed', icon: 'rocket' },
    { value: '10,000+', label: 'Jobs Created', icon: 'briefcase' }
  ];


  spotlightEvents = [
    { title: '7-Day Startup Expo 2025 — Bangalore', desc: 'Explore recent funding startups, meet investors, and discover the future of tech.' }
  ];

  startCountdown() {
    const launchDate = new Date('2025-11-07T00:00:00').getTime();

    this.timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(this.timerInterval);
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
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

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    this.contactService.submitContactForm(this.contactForm.value).subscribe({
      next: () => {
        this.toast.showSuccess('Thank you! Your response has been saved.');
        this.contactForm.reset();
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
