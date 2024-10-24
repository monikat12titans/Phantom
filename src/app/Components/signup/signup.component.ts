import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  SignupForm: FormGroup = new FormGroup({
    Email: new FormControl(),
    Nickname: new FormControl(),
    Password: new FormControl(),
    ConfirmPassword: new FormControl(),
    FirstName: new FormControl(),
    LastName: new FormControl(),
    Company: new FormControl(),
    PhoneNumber: new FormControl(),
    Address: new FormControl(),
    Address2: new FormControl(),
    City: new FormControl(),
    PostalCode: new FormControl(),
    State: new FormControl(),
    Country: new FormControl(),
  })

  signupFormValue : any;
  signUp(){
    this.signupFormValue = this.SignupForm.value
  }

}
