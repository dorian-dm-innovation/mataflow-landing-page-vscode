import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinSectionComponent } from './linkedin-section.component';

describe('LinkedinSectionComponent', () => {
  let component: LinkedinSectionComponent;
  let fixture: ComponentFixture<LinkedinSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedinSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkedinSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});