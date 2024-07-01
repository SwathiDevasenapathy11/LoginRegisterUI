import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Register } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private addUser = environment.apiUrl+'/user/add'
   
  constructor(private http : HttpClient) { }

  add(register : Register){
    return this.http.post(this.addUser , register)
  }

}
