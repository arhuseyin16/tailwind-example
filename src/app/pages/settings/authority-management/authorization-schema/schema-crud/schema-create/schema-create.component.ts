import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-schema-create',
  templateUrl: './schema-create.component.html',
  styleUrls: ['./schema-create.component.scss']
})
export class SchemaCreateComponent implements OnInit {

  schemaCreateFormGroup = new FormGroup({
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
  @Output() createSchemaEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  createSchema() {
    if (this.schemaCreateFormGroup.valid) {
      this.createSchemaEvent.emit(this.schemaCreateFormGroup.value);
    } else {
      Object.values(this.schemaCreateFormGroup.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
