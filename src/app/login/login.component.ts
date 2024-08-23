import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output()
  userAuthenticated = new EventEmitter<boolean>()


  onSubmit(login: Login): void{

    console.log("Login Submitted", JSON.stringify(login))

    this.userAuthenticated.emit(true);
  }
}
