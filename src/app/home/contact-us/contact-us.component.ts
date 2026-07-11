// import { FooterComponent } from './../../footer/footer.component';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact-us',
//   standalone: true,
//   imports: [ FooterComponent ],
//   templateUrl: './contact-us.component.html',
//   styleUrl: './contact-us.component.scss'
// })
// export class ContactUsComponent {

// }

import { FooterComponent } from './../../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contact-us.component.html',  // Make sure this file exists
  styleUrls: ['./contact-us.component.scss']  // Use styleUrls (plural) for multiple styles
})
export class ContactUsComponent {
  contactData = {
    email: '',
    subject: '', 
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactData);
    alert('Thank you for your message! We will get back to you soon.');
    this.contactData = { email: '', subject: '', message: '' };
  }
}

