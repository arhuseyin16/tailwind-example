import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  posForm = this.fb.group({
    currencyUnit: new FormControl(''),
    companies: new FormControl(''),
    banks: new FormControl(''),
    branches: new FormControl(''),
    accountTypes: new FormControl(''),
    accounts: new FormControl(''),
    willBorrow: new FormControl(''),
  });

  @Input() saveButtonClickEvent = new EventEmitter();
  @Output() posFormEvent = new EventEmitter()
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.saveButtonClickEvent.subscribe(res => {
      if (res) {
        this.posFormEvent.emit(this.posForm);
      }
    });
  }
}
