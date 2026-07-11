// import { Menu } from './../models/menu';
// import { Constants } from './../constants/constants';
// import { Component, ElementRef, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss'
// })
// export class HeaderComponent {
//   menus: Menu[] = Constants.HEADER_MENUS;
//   selectedMenuIndex: number = 0;

//   @HostListener("window:scroll")
//   onWindowScroll() {
//     let header = this.el.nativeElement.querySelector('.header');
//     if(document.documentElement.scrollTop > 100) { header.classList.add('navigation-background'); }
//     else { header.classList.remove('navigation-background'); }
//   }

//   constructor(private el: ElementRef, private router: Router){}


//   onMenuClick(menuIndex: number): void {

//     this.selectedMenuIndex = menuIndex;
  
//     switch (menuIndex) {
  
//       case 0: // Home
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth'
//         });
//         break;
  
//       case 1: // About Us
//         document.getElementById('about-us')?.scrollIntoView({
//           behavior: 'smooth'
//         });
//         break;
  
//       case 2: // Products
//         document.getElementById('our-products')?.scrollIntoView({
//           behavior: 'smooth'
//         });
//         break;

//       case 3: // Products
//         document.getElementById('why-to-choose-us')?.scrollIntoView({
//           behavior: 'smooth'
//         });
//       break; 
  
//       case 4:
//         this.router.navigate(['/contact-us']);
//         break;
//     }
//   }
// }

// import { Menu } from './../models/menu';
// import { Constants } from './../constants/constants';
// import { Component, ElementRef, HostListener } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss'
// })
// export class HeaderComponent {
//   menus: Menu[] = Constants.HEADER_MENUS;
//   selectedMenuIndex: number = 0;
//   isScrolled: boolean = false;
//   isMobileMenuOpen: boolean = false;

//   @HostListener("window:scroll")
//   onWindowScroll() {
//     this.isScrolled = document.documentElement.scrollTop > 100;
//     let header = this.el.nativeElement.querySelector('.header');
//     if(this.isScrolled) { 
//       header.classList.add('navigation-background'); 
//     } else { 
//       header.classList.remove('navigation-background'); 
//     }
//   }

//   // Close mobile menu on window resize to desktop
//   @HostListener("window:resize")
//   onWindowResize() {
//     if (window.innerWidth > 768 && this.isMobileMenuOpen) {
//       this.isMobileMenuOpen = false;
//     }
//   }

//   constructor(private el: ElementRef, private router: Router){}

//   toggleMobileMenu(): void {
//     this.isMobileMenuOpen = !this.isMobileMenuOpen;
//     // Prevent body scroll when menu is open
//     if (this.isMobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//   }

//   goToHome(): void {
//     this.router.navigate(['/home']);
//     this.selectedMenuIndex = 0;
//     this.isMobileMenuOpen = false;
//     document.body.style.overflow = '';
//   }

//   onMenuClick(menuIndex: number): void {
//     this.selectedMenuIndex = menuIndex;
//     this.isMobileMenuOpen = false;
//     document.body.style.overflow = '';

//     switch (menuIndex) {
//       case 0: // Home
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth'
//         });
//         break;

//       case 1: // About Us
//         document.getElementById('about-us')?.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//         break;

//       case 2: // Products
//         document.getElementById('our-products')?.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//         break;

//       case 3: // Values
//         document.getElementById('why-to-choose-us')?.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//         break;

//       case 4: // Contact Us
//         this.router.navigate(['/contact-us']);
//         break;
//     }
//   }
// }

import { Menu } from './../models/menu';
import { Constants } from './../constants/constants';
import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menus: Menu[] = Constants.HEADER_MENUS;
  selectedMenuIndex: number = 0;
  isScrolled: boolean = false;
  isMobileMenuOpen: boolean = false;

  @HostListener("window:scroll")
  onWindowScroll() {
    this.isScrolled = document.documentElement.scrollTop > 100;
    let header = this.el.nativeElement.querySelector('.header');
    if(this.isScrolled) { 
      header.classList.add('navigation-background'); 
    } else { 
      header.classList.remove('navigation-background'); 
    }
  }

  @HostListener("window:resize")
  onWindowResize() {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  constructor(private el: ElementRef, private router: Router){}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
    this.selectedMenuIndex = 0;
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  onMenuClick(menuIndex: number): void {
    this.selectedMenuIndex = menuIndex;
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';

    switch (menuIndex) {
      case 0:
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 1:
        document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 2:
        document.getElementById('our-products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 3:
        document.getElementById('why-to-choose-us')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 4:
        this.router.navigate(['/contact-us']);
        break;
    }
  }
}