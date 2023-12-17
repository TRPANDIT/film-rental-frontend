import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.authService.removeUser();
    this.authService.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
