import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private userService: UserService
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
}
