import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-propertiy',
  templateUrl: './add-propertiy.component.html',
  styleUrls: ['./add-propertiy.component.css'],
})
export class AddPropertiyComponent {
  allFieldsError: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}
  addProperty(form: NgForm) {
    if (form.invalid) {
      this.allFieldsError = true;
      setTimeout(() => {
        this.allFieldsError = false;
      }, 2000);
      return;
    }
    this.apiService.createProperty(form.value).subscribe((data) => {
      this.router.navigate(['/catalog']);
    });
  }
}
