import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-propertiy',
  templateUrl: './add-propertiy.component.html',
  styleUrls: ['./add-propertiy.component.css'],
})
export class AddPropertiyComponent {
  allFieldsError: boolean = false;

  constructor(private apiService: ApiService) {}
  addProperty(form: NgForm) {
    if (form.invalid) {
      this.allFieldsError = true;
      setTimeout(() => {
        this.allFieldsError = false;
      }, 2000);
      return;
    }
    console.log(form.value);
  }
}
