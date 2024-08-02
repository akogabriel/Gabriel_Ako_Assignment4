import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const user: User = {
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'john.doe@example.com',
      phoneNumber: '1234567890',
      streetName: 'Main St',
      postalCode: '12345',
      city: 'Anytown',
    };

    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/personal-info']);
  }
}
