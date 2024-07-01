import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user-service';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    MessageService 
  ],
})
export class AuthModule { }
