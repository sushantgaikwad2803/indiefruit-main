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

import emailjs from '@emailjs/browser';
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

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onSubmit() {

    emailjs.send(
      'service_5vcoydi',     // Your Service ID
      'template_d3hzttc',    // Your Template ID
      {
        email: this.contactData.email,
        subject: this.contactData.subject,
        message: this.contactData.message,
      },
      'S_RM4sZOTwVgQK-PC'         // Your Public Key
    ).then(
      () => {
  
        alert("Message Sent Successfully!");
  
        this.contactData = {
          email: '',
          subject: '',
          message: ''
        };
  
      },
      (error) => {
  
        console.log(error);
  
        alert("Failed to send message.");
  
      }
    );
  
  }
}

