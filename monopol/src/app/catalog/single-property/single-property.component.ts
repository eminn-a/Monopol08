import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Property } from 'src/app/types/property';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-single-property',
  templateUrl: './single-property.component.html',
  styleUrls: ['./single-property.component.css'],
})
export class SinglePropertyComponent implements OnInit {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get isAdmin(): boolean {
    return this.userService.isAdmin;
  }

  property = {} as Property;
  constructor(
    private apiService: ApiService,
    private activeRote: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  onDellete() {
    alert(
      `Are you sure you want to delete this property with id :${this.property._id}`
    );
    console.log(this.property._id);
    this.apiService.deleteProperty(this.property._id).subscribe((data) => {
      this.router.navigate(['/catalog']);
    });
  }

  ngOnInit(): void {
    this.activeRote.params.subscribe((data) => {
      const id = data['houseId'];
      this.apiService.getProperty(id).subscribe((property) => {
        this.property = property;
      });
    });
  }
}
