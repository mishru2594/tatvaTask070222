import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formData:FormGroup=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl ('',Validators.required),
    password:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    roll:new FormControl('',Validators.required)
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  signUp(){
    console.warn(this.formData.value)
  }
}
