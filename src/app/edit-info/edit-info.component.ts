import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css'],
})
export class EditInfoComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    streetName: '',
    postalCode: '',
    city: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const user = sessionStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/personal-info']);
  }
}
