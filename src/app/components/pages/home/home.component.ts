import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: AuthService, private toast: NgToastService, private router: Router) { }
  errorMessage: any;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(response => {
      this.toast.success({ detail: "SUCCESS", summary: 'Cool you are authorized', duration: 5000 });
      console.log(response);

    }, error => {
      this.errorMessage = error;
      let errorResponse: HttpErrorResponse = error;
      if (errorResponse.status == 401) {
        this.toast.error({ detail: "ERROR", summary: "Unauthorized, Please log in", sticky: true });
        this.router.navigate(["/login"])
      }

    });
  }

}
