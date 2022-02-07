import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = new User();
  formData: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    roll: new FormControl('', Validators.required)
  })
  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

  }
  signUp() {
    this.user.firstName = this.formData.value.firstName;
    this.user.lastName = this.formData.value.lastName;
    this.user.email = this.formData.value.email;
    this.user.password = this.formData.value.password;
    this.user.dob = this.formData.value.dob;
    this.user.roll = this.formData.value.roll;

    this.api.signupPost(this.user).subscribe({
      next: (res) => {
        console.log(res)
        alert("Data is successfully posted")
      },
      error:(err)=>{
        alert("Data is not posted")
      }
    })
  }
}
