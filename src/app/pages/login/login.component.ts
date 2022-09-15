import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  loginForm = this.fb.group({
    username: [],
    password: [],
    checked: [true]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  loginClick() {
    this.router.navigate(['/dashboard']);
  }
}
