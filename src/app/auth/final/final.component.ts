import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { NgClass } from '@angular/common';
@Component({
    selector: 'app-final',
    standalone: true,
    templateUrl: './final.component.html',
    styleUrl: './final.component.scss',
    imports: [RegisterComponent, LoginComponent , NgClass]
})
export class FinalComponent {
  isRightPanelActive: boolean = false;

  togglePanel() {
    this.isRightPanelActive = !this.isRightPanelActive;
  }

}
