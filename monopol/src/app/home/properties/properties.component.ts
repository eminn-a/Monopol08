import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Property } from '../../types/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent implements OnInit {
  properties: Property[] = [];

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getRecentProperties(3).subscribe((properties) => {
      this.properties = properties;
    });
  }
}
