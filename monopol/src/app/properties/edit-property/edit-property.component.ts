import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Property } from 'src/app/types/property';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
})
export class EditPropertyComponent implements OnInit {
  property = {} as Property;

  allFieldsError: boolean = false;
  constructor(
    private apiService: ApiService,
    private activeRote: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRote.params.subscribe((data) => {
      const id = data['houseId'];
      this.apiService.getProperty(id).subscribe((property) => {
        console.log(property);
        this.property = property;
      });
    });
  }

  editProperty(form: NgForm) {
    if (form.invalid) {
      this.allFieldsError = true;
      setTimeout(() => {
        this.allFieldsError = false;
      }, 2000);
      return;
    }
    const payloud = form.value;
    const id = this.property._id;
    console.log('payloud', payloud);
    console.log('property id', id);
    this.apiService.editProperty(payloud, id).subscribe(() => {
      this.router.navigate(['/catalog', id]);
    });
  }
}
