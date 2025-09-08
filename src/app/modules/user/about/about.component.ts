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

  stats = [
    { value: '200+', label: 'Startups Supported' },
    { value: '₹600 Cr+', label: 'Funding Accessed' },
    { value: '10,000+', label: 'Jobs Created' }
  ];


}
