import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  user: User | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const user = sessionStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }

  onEdit() {
    this.router.navigate(['/edit-info']);
  }
}
