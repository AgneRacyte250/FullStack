import { Component } from '@angular/core';
import { HousingService } from '../housing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-housing-create',
  templateUrl: './housing-create.component.html',
  styleUrls: ['./housing-create.component.css']
})
export class HousingCreateComponent {
  housingForm: FormGroup;

  constructor(private fb: FormBuilder, private housingService: HousingService) {
    this.housingForm = this.fb.group({
      price: ['', Validators.required],
      area: ['', Validators.required],
      bedrooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      stories: ['', Validators.required],
      mainroad: ['', Validators.required],
      guestroom: ['', Validators.required],
      basement: ['', Validators.required],
      hotwaterheating: ['', Validators.required],
      airconditioning: ['', Validators.required],
      parking: ['', Validators.required],
      prefarea: ['', Validators.required],
      furnishingstatus: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.housingForm.valid) {
      this.housingService.createHousing(this.housingForm.value).subscribe(() => {
        console.log('Housing created successfully!');
      });
    }
  }
}
