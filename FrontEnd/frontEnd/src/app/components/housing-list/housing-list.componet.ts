import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  housings: any = [];

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getHousings().subscribe((data: any) => {
      this.housings = data.data;
    });
  }
}
