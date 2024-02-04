import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerdesekComponent } from './kerdesek.component';

describe('KerdesekComponent', () => {
  let component: KerdesekComponent;
  let fixture: ComponentFixture<KerdesekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KerdesekComponent]
    });
    fixture = TestBed.createComponent(KerdesekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
