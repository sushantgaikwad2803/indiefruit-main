import { Product } from '../models/product';
import { Menu } from '../models/menu';

export class Constants {
    static readonly HEADER_MENUS: Menu[] = [
        { text: 'HOME', page: 'home' },
        { text: 'ABOUT US', page: 'about-us' },
        { text: 'OUR PRODUCTS', page: 'our-products' },
        { text: 'OUR VALUES', page: 'our-values' },
        { text: 'CONTACT US', page: 'contact-us' },
    ];

    static readonly PRODUCTS: Product[] = [
        { filePath: 'assets/portfolio/1.jpg', productName: 'Pomegranates', category: 'fruit' },
        { filePath: 'assets/portfolio/2.jpg', productName: 'Grapes', category: 'fruit' },
        { filePath: 'assets/portfolio/3.jpg', productName: 'Lemons', category: 'fruit' },
        { filePath: 'assets/portfolio/4.jpg', productName: 'Bananas', category: 'fruit' },
        { filePath: 'assets/portfolio/5.jpg', productName: 'Mangos', category: 'fruit' },
        { filePath: 'assets/portfolio/6.jpg', productName: 'Red Onions', category: 'vegetable' },
        { filePath: 'assets/portfolio/7.jpg', productName: 'Carrots', category: 'vegetable' },
        { filePath: 'assets/portfolio/8.jpg', productName: 'Drumsticks', category: 'vegetable' },
        { filePath: 'assets/portfolio/9.jpg', productName: 'Cucumbers', category: 'vegetable' },
        { filePath: 'assets/portfolio/10.jpg', productName: 'Potatos', category: 'vegetable' },
        { filePath: 'assets/portfolio/11.jpg', productName: 'Garlic', category: 'vegetable' },
        { filePath: 'assets/portfolio/12.jpg', productName: 'Ginger', category: 'vegetable' },
        { filePath: 'assets/portfolio/13.jpg', productName: 'Green Chilli', category: 'vegetable' },
        { filePath: 'assets/portfolio/14.jpg', productName: 'Raisin', category: 'dry-fruit' },
        { filePath: 'assets/portfolio/15.jpg', productName: 'Turmeric', category: 'spice' },
    ];
}