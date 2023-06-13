import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, catchError, throwError } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private toast: NgToastService) { }

  public login(user: User): Observable<any> {
    return this.http.post<any>('https://localhost:7097/api/Auth/Login', user);
  }

  public getUsers(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://localhost:7097/api/Auth/users').pipe(catchError(this.errorHandler));

  }

  errorHandler(response: HttpErrorResponse) {
    return throwError(response || 'ServerError')
  }
}


