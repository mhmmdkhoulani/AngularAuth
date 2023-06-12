import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: AuthService) { }
  users: Array<any> = [];
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

}
