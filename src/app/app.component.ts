import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilsService } from './shared/services/utils.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from './shared/services/contact.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit, OnDestroy {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private timerInterval: any;
  isBrowserLoaded = false;
  contactForm!: FormGroup;
  isSubmitting = false;


  constructor(@Inject(PLATFORM_ID) private platformId: object, private utils: UtilsService, private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startCountdown();
      this.isBrowserLoaded = true;
      this.utils.setupIntersectionObserver();
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

    }
  }

  startCountdown() {
    const launchDate = new Date('2025-09-15T00:00:00').getTime();

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

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      clearInterval(this.timerInterval);
    }
  }
  scrollTo(target: string): void {
    this.utils.smoothScrollTo(target);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    this.contactService.submitContactForm(this.contactForm.value).subscribe({
      next: () => {
        alert('✅ Thank you! Your response has been saved.');
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: (err) => {
        console.error("Error submitting form", err);
        alert('⚠️ Something went wrong. Please try again.');
        this.isSubmitting = false;
      }
    });
  }
}
