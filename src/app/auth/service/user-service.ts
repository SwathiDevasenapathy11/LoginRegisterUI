import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthResponse, Login, Register } from '../model/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private addUser = environment.apiUrl+'/user/add';
  private loginUrl = environment.apiUrl + '/user/login'
   
  constructor(private http : HttpClient) { }

  add(register : Register){
    return this.http.post(this.addUser , register)
  }

  authenticate(login : Login): Observable<AuthResponse>{
    // console.log("yessssssss")
    return this.http.post<AuthResponse>(this.loginUrl , login)
  }
}
