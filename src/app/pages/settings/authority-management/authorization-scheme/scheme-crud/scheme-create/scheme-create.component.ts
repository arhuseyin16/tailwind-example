import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-scheme-create',
  templateUrl: './scheme-create.component.html',
  styleUrls: ['./scheme-create.component.scss']
})
export class SchemeCreateComponent implements OnInit {

  schemeCreateFormGroup = new FormGroup({
    name: new FormControl('', {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
    modules: new FormControl([], {initialValueIsDefault: true, nonNullable: true, validators: Validators.required}),
  });

  modules = [
      {
        name: 'Banka İşlemleri',
        id: 1,
        status: false
      },
      {
        name: 'POS İşlemleri',
        id: 2,
        status: false
      },
      {
        name: 'E Ödeme',
        id: 3,
        status: false
      },
      {
        name: 'Online DBS',
        id: 4,
        status: false
      }
    ];
  @Output() createSchemeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  createScheme() {
    if (this.schemeCreateFormGroup.valid) {
      this.createSchemeEvent.emit(this.schemeCreateFormGroup.value);
    } else {
      Object.values(this.schemeCreateFormGroup.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
