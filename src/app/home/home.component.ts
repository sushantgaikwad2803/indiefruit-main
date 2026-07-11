// import { FooterComponent } from './../footer/footer.component';
// import { HeaderComponent } from './../header/header.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { BannerComponent } from './banner/banner.component';
// import { WhyToChooseUsComponent } from './why-to-choose-us/why-to-choose-us.component';
// import { OurProductsComponent } from './our-products/our-products.component';
// import { Component } from '@angular/core';
// import { OurValuesComponent } from './our-values/our-values.component';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [BannerComponent, AboutUsComponent, OurProductsComponent, WhyToChooseUsComponent, HeaderComponent, HomeComponent, FooterComponent, OurValuesComponent],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

// }
 
import { Component } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { FooterComponent } from './../footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { OurValuesComponent } from './our-values/our-values.component';
import { WhyToChooseUsComponent } from './why-to-choose-us/why-to-choose-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    AboutUsComponent,
    OurProductsComponent,
    OurValuesComponent,
    WhyToChooseUsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}