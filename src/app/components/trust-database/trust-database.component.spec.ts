import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustDatabaseComponent } from './trust-database.component';

describe('TrustDatabaseComponent', () => {
  let component: TrustDatabaseComponent;
  let fixture: ComponentFixture<TrustDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustDatabaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrustDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
