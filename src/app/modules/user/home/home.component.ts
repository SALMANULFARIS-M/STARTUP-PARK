import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ecosystem = [
    'Co-working Zones',
    'Innovation Labs',
    'Event Halls & Demo Stages',
    'Networking Lounges',
    'Food Courts & Coffee Bars',
    'Incubator & Accelerator',
    'Mentoring Programs',
    'Development Programs',
    'Business Schools & Masterclasses',
    'Startup Legal Help'
  ];

  stats = [
    { value: '200+', label: 'Startups Supported' },
    { value: '₹600 Cr+', label: 'Funding Accessed' },
    { value: '10,000+', label: 'Jobs Created' }
  ];

  spotlightEvents = [
    { title: '7-Day Startup Expo 2025 — Bangalore', desc: 'Explore recent funding startups, meet investors, and discover the future of tech.' }
  ];
}
