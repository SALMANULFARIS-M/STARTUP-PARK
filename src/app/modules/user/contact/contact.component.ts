import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/user/header/header.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../../shared/components/user/footer/footer.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,ReactiveFormsModule,HeaderComponent,FooterComponent,LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitForm() {
    alert('Thank you! Your message has been sent.');
    // Add real form submission logic here (API call or Firebase integration)
  }
}
