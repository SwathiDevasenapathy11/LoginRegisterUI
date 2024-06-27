import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule , FormBuilder , FormGroup , FormControl , Validators , ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IconFieldModule , InputIconModule , InputTextModule , ButtonModule , FormsModule , ReactiveFormsModule , NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm! : FormGroup ;

  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      name : ['' , Validators.required],
      email : ['',Validators.required , Validators.email],
      password : ['' , [Validators.required , Validators.minLength(8)]],
      confirmPassword : ['' , [Validators.required , Validators.minLength(8)]]
    })
  }

}
