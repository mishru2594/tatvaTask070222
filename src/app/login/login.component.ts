import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  data: any
  formData: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.warn(this.login())
  }
  login() {
    this.api.loginUser().subscribe({
      next: (res) => {
        if (res.email === this.user.email && res.password === this.user.password) {
          this.router.navigate(['blog'])
          return alert("user has logged")
        }
      }
    })
  }

}
