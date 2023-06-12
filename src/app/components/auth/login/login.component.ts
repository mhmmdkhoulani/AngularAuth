import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = { email: '', password: '' };
  token: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  login(form: any) {
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    console.log(this.user);
    this.authService.login(this.user).subscribe(response => {
      localStorage.setItem('authToken', response.value.token);
      this.router.navigate(['']);
    })
  }
}
