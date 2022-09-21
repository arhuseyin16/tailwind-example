import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  loginForm = this.fb.group({
    companyCode: new FormControl('12345', Validators.required),
    username: new FormControl('eho', Validators.required),
    password: new FormControl('eho', Validators.required),
    rememberMe: new FormControl(true),
  });
  isOtp = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginClick(): void {
    this.isOtp = true;
    // this.router.navigate(['/bank']);
  }
}
