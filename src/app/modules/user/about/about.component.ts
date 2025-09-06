import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/user/header/header.component';

import { FooterComponent } from '../../../shared/components/user/footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 team = [
    { name: 'Founder One', role: 'CEO & Co-founder', photo: 'https://www.incubenation.com/assets/shafi-B-rhCGUd.jpg' },
    { name: 'Founder Two', role: 'CTO & Co-founder', photo: 'https://www.pngitem.com/pimgs/m/272-2720656_user-profile-dummy-hd-png-download.png' },
    { name: 'Mentor One', role: 'Lead Mentor', photo: 'https://www.pngitem.com/pimgs/m/272-2720656_user-profile-dummy-hd-png-download.png' }
  ];

  stats = [
    { value: '200+', label: 'Startups Supported' },
    { value: '₹600 Cr+', label: 'Funding Accessed' },
    { value: '10,000+', label: 'Jobs Created' }
  ];


}
