import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPublicInfo } from '../models/user/UserPublicInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any;
  constructor(private http: HttpClient) {

  }
  getUsers(quantity: number): Observable<any> {
    return this.http.get("https://randomuser.me/api/?nat=es&results=" + quantity)
  }
}