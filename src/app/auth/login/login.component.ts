import { Component, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterComponent } from "../register/register.component";
import { NgClass, NgIf } from '@angular/common';
import { FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { UserService } from '../service/user-service';
import { AuthResponse, Login } from '../model/login';
@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ ButtonModule, IconFieldModule, InputTextModule, InputIconModule, RegisterComponent , NgClass , FormsModule , NgIf ]
})
export class LoginComponent {
    login! : Login;
    loginForm! : FormGroup;

    constructor(private userService : UserService){}

    ngOnInit(){
        // this.login = new Login();
    }

    authenticateInfo(loginForm: NgForm) {
        if (loginForm.valid) {
            this.login = loginForm.value;
            this.userService.authenticate(this.login).subscribe(
                (response: AuthResponse) => {
                    console.log("Authenticated", response);
                    localStorage.setItem('username' , response.username);
                    localStorage.setItem('token' , response.token);
                    localStorage.setItem('role' , response.role);
                    localStorage.setItem('id', response.id.toString());
                    loginForm.resetForm();
                },
                error => {
                    console.error("Authentication failed", error);
                    loginForm.resetForm();
                }
            );
        } else {
            loginForm.resetForm();
        }
    }

}
