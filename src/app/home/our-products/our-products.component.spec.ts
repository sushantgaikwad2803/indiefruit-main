// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { OurProductsComponent } from './our-products.component';

// describe('OurProductsComponent', () => {
//   let component: OurProductsComponent;
//   let fixture: ComponentFixture<OurProductsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [OurProductsComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(OurProductsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurProductsComponent } from './our-products.component';
import { Constants } from '../../constants/constants';

describe('OurProductsComponent', () => {
  let component: OurProductsComponent;
  let fixture: ComponentFixture<OurProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return products from Constants', () => {
    const products = component.getProducts();
    expect(products).toEqual(Constants.PRODUCTS);
    expect(products.length).toBe(15);
  });

  it('should filter products by category', () => {
    const fruits = component.getProductsByCategory('fruit');
    expect(fruits.every(p => p.category === 'fruit')).toBeTrue();
    expect(fruits.length).toBe(5);
  });

  it('should return category icon', () => {
    expect(component.getCategoryIcon('fruit')).toBe('🍎');
    expect(component.getCategoryIcon('vegetable')).toBe('🥬');
    expect(component.getCategoryIcon('dry-fruit')).toBe('🥜');
    expect(component.getCategoryIcon('spice')).toBe('🌶️');
  });

  it('should return category color', () => {
    expect(component.getCategoryColor('fruit')).toBe('#f4a460');
    expect(component.getCategoryColor('vegetable')).toBe('#79A03F');
    expect(component.getCategoryColor('dry-fruit')).toBe('#8B4513');
    expect(component.getCategoryColor('spice')).toBe('#ff6b6b');
  });
});