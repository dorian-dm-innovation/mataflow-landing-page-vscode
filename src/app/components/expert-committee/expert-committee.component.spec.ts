import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCommitteeComponent } from './expert-committee.component';

describe('ExpertCommitteeComponent', () => {
  let component: ExpertCommitteeComponent;
  let fixture: ComponentFixture<ExpertCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertCommitteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
