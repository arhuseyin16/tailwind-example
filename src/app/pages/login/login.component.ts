import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

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

  languageMeta = {
    tr: {text: "Türkçe", flagImagePath: "assets/flags/language-tr.png", short: 'TR'},
    en: {text: "English", flagImagePath: "assets/flags/language-en.png", short: 'EN'},
  } as any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public translateService: TranslateService
  ) {
    translateService.addLangs(['en', 'tr']);
  }

  ngOnInit(): void {
    const language = localStorage.getItem('language');
    if(language === 'en') {
      this.translateService.setDefaultLang('en');
      localStorage.setItem('language', 'en');
    } else {
      this.translateService.setDefaultLang('tr');
      localStorage.setItem('language', 'tr');
    }
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.defaultLang = lang
    localStorage.setItem('language', lang);
  }

  loginClick(): void {
    this.isOtp = true;
    // this.router.navigate(['/bank']);
  }
}
