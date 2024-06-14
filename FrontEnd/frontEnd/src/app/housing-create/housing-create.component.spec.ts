import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingCreateComponent } from './housing-create.component';

describe('HousingCreateComponent', () => {
  let component: HousingCreateComponent;
  let fixture: ComponentFixture<HousingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
