import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterComponent } from "../register/register.component";
import { NgClass } from '@angular/common';
@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ButtonModule, IconFieldModule, InputTextModule, InputIconModule, RegisterComponent , NgClass]
})
export class LoginComponent {

}
