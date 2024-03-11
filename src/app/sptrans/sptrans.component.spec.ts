import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPTRANSComponent } from './sptrans.component';

describe('SPTRANSComponent', () => {
  let component: SPTRANSComponent;
  let fixture: ComponentFixture<SPTRANSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPTRANSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SPTRANSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
