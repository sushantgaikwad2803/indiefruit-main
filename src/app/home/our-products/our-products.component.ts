// import { Product } from '../../models/product';
// import { Constants } from '../../constants/constants';
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-our-products',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './our-products.component.html',
//   styleUrl: './our-products.component.scss'
// })
// export class OurProductsComponent {

//   getProducts(): Product[] {
//     return Constants.PRODUCTS;
//   }
// }

import { Product } from '../../models/product';
import { Constants } from '../../constants/constants';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-products.component.html',  // Make sure this file exists in the same directory
  styleUrls: ['./our-products.component.scss']  // Use styleUrls (plural) for multiple styles
})
export class OurProductsComponent {
  activeCategory: string = 'all';

  getProducts(): Product[] {
    return Constants.PRODUCTS;
  }

  onProductClick(product: Product): void {
    console.log('Product clicked:', product);
  }

  onInfoClick(product: Product, event: Event): void {
    event.stopPropagation();
    console.log('Info button clicked for:', product);
  }

  getProductsByCategory(category: string): Product[] {
    return this.getProducts().filter(p => p.category === category);
  }

  getCategoryIcon(category: string): string {
    const icons: {[key: string]: string} = {
      'fruit': '🍎',
      'vegetable': '🥬',
      'dry-fruit': '🥜',
      'spice': '🌶️'
    };
    return icons[category] || '📦';
  }

  getCategoryColor(category: string): string {
    const colors: {[key: string]: string} = {
      'fruit': '#f4a460',
      'vegetable': '#79A03F',
      'dry-fruit': '#8B4513',
      'spice': '#ff6b6b'
    };
    return colors[category] || '#104051';
  }
}