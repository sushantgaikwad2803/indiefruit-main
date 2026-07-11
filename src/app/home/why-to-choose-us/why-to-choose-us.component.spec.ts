import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyToChooseUsComponent } from './why-to-choose-us.component';

describe('WhyToChooseUsComponent', () => {
  let component: WhyToChooseUsComponent;
  let fixture: ComponentFixture<WhyToChooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyToChooseUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyToChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
