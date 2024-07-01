import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule , FormBuilder , FormGroup  , Validators , ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserService } from '../service/user-service';
import { Register } from '../model/login';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IconFieldModule , InputIconModule , InputTextModule , ButtonModule , FormsModule , ReactiveFormsModule , NgIf ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm! : FormGroup ;
  register! : Register ;
 
  constructor(private fb:FormBuilder , private userService:UserService){
    this.registerForm = this.fb.group({
      username : ['' , Validators.required],
      email : ['',Validators.required],
      password : ['' , [Validators.required , Validators.minLength(8)]],
      confirmPassword : ['' , [Validators.required , Validators.minLength(8)]]
    })
  }

  ngOnInit(){
    this.register = new Register();
  }

  addUser() {
    if (this.registerForm.valid) {
      this.register = this.registerForm.value;
      this.userService.add(this.register).subscribe(
        response => {
          console.log("Added successfully", response);
          this.registerForm.reset();
        },
        error => {
          console.error("Error adding user:", error);
        }
      );
    }
  }
}
