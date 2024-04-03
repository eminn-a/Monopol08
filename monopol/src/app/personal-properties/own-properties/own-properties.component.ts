import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Property } from 'src/app/types/property';

@Component({
  selector: 'app-own-properties',
  templateUrl: './own-properties.component.html',
  styleUrls: ['./own-properties.component.css'],
})
export class OwnPropertiesComponent {
  ownProperties: Property[] = [];
  userId = localStorage.getItem('userId');

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService
      .getOwnProperties(this.userId!)
      .subscribe((ownProperties) => {
        this.ownProperties = ownProperties;
      });
  }
}
