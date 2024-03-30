import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Property } from 'src/app/types/property';

@Component({
  selector: 'app-all-properties',
  templateUrl: './all-properties.component.html',
  styleUrls: ['./all-properties.component.css'],
})
export class AllPropertiesComponent {
  allProperties: Property[] = [];

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getProperties().subscribe((allProperties) => {
      console.log(allProperties);
      this.allProperties = allProperties;
    });
  }
}
