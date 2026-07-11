import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneValueComponent } from './one-value.component';

describe('OneValueComponent', () => {
  let component: OneValueComponent;
  let fixture: ComponentFixture<OneValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
