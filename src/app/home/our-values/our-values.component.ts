// import { CommonModule } from '@angular/common';
// import { OneValueComponent } from './one-value/one-value.component';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-our-values',
//   standalone: true,
//   imports: [OneValueComponent, CommonModule],
//   templateUrl: './our-values.component.html',
//   styleUrl: './our-values.component.scss'
// })
// export class OurValuesComponent {
//   values: { title: string, content: string }[] = [
//     { 
//       title: 'Integrity',
//       content: `We conduct our business with the highest ethical standards, ensuring transparency and trust in all our dealings. We provide accurate information about the origin, cultivation methods, and handling of the produce. Ensuring fair labor practices and sustainable farming methods to support environmental and social responsibility. Maintaining these principles helps build a reputable and trustworthy business that can sustain long-term relationships with customers and partners.`
//     },
//     {
//       title: 'Quality',
//       content: `We are unwavering in our pursuit of excellence, continually striving to enhance the quality of our products and services. At IndieFruit, quality is our top priority. We are dedicated to providing the freshest and highest-quality fruits and vegetables to our customers. Our produce undergoes stringent quality control processes from farm to table. We follow industry best practices to ensure every fruit and vegetable meets our high standards. Food safety is paramount at IndieFruit. We comply with all local and international safety regulations and conduct regular inspections to guarantee that our produce is free from contaminants and safe for consumption.`
//     },
//     {
//       title: 'Sustainability',
//       content: `We are dedicated to sustainable practices that protect the environment and support the well-being of our farming communities. We partner with trusted farmers who use sustainable and ethical farming practices. Our commitment to responsible sourcing ensures that our produce is not only fresh but also environmentally friendly. We implement advanced storage and transportation techniques to preserve the freshness and nutritional value of our produce. From the moment it is harvested to the time it reaches you, our fruits and vegetables are handled with the utmost care.`
//     },
//     {
//       title: 'Customer Focus',
//       content: `We prioritize the needs of our customers, offering personalized service and tailored solutions to meet their specific requirements. We are dedicated to delivering the freshest and highest-quality fruits and vegetables. Our rigorous quality control processes ensure that every product meets our high standards for taste, appearance, and nutritional value. Our customer service team is always ready to assist you. Whether you have questions about our products, need help with an order, or have any concerns, we are here to provide prompt, friendly, and helpful support.`
//     },
//   ];
// }


import { CommonModule } from '@angular/common';
import { OneValueComponent } from './one-value/one-value.component';
import { Component } from '@angular/core';

export interface Value {
  title: string;
  content: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-our-values',
  standalone: true,
  imports: [OneValueComponent, CommonModule],
  templateUrl: './our-values.component.html',
  styleUrl: './our-values.component.scss'
})
export class OurValuesComponent {
  values: Value[] = [
    { 
      title: 'Integrity',
      content: `We conduct our business with the highest ethical standards, ensuring transparency and trust in all our dealings. We provide accurate information about the origin, cultivation methods, and handling of the produce. Ensuring fair labor practices and sustainable farming methods to support environmental and social responsibility. Maintaining these principles helps build a reputable and trustworthy business that can sustain long-term relationships with customers and partners.`,
      icon: '🤝',
      color: '#f4a460'
    },
    {
      title: 'Quality',
      content: `We are unwavering in our pursuit of excellence, continually striving to enhance the quality of our products and services. At IndieFruit, quality is our top priority. We are dedicated to providing the freshest and highest-quality fruits and vegetables to our customers. Our produce undergoes stringent quality control processes from farm to table. We follow industry best practices to ensure every fruit and vegetable meets our high standards. Food safety is paramount at IndieFruit. We comply with all local and international safety regulations and conduct regular inspections to guarantee that our produce is free from contaminants and safe for consumption.`,
      icon: '⭐',
      color: '#97cd01'
    },
    {
      title: 'Sustainability',
      content: `We are dedicated to sustainable practices that protect the environment and support the well-being of our farming communities. We partner with trusted farmers who use sustainable and ethical farming practices. Our commitment to responsible sourcing ensures that our produce is not only fresh but also environmentally friendly. We implement advanced storage and transportation techniques to preserve the freshness and nutritional value of our produce. From the moment it is harvested to the time it reaches you, our fruits and vegetables are handled with the utmost care.`,
      icon: '🌱',
      color: '#2ecc71'
    },
    {
      title: 'Customer Focus',
      content: `We prioritize the needs of our customers, offering personalized service and tailored solutions to meet their specific requirements. We are dedicated to delivering the freshest and highest-quality fruits and vegetables. Our rigorous quality control processes ensure that every product meets our high standards for taste, appearance, and nutritional value. Our customer service team is always ready to assist you. Whether you have questions about our products, need help with an order, or have any concerns, we are here to provide prompt, friendly, and helpful support.`,
      icon: '💎',
      color: '#4a90d9'
    },
  ];
}