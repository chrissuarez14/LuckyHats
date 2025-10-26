import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewletterSingupComponent } from './newletter-singup-component';

describe('NewletterSingupComponent', () => {
  let component: NewletterSingupComponent;
  let fixture: ComponentFixture<NewletterSingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewletterSingupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewletterSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
