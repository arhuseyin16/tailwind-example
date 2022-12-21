import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-dbs',
  templateUrl: './dbs.component.html',
  styleUrls: ['./dbs.component.scss']
})
export class DbsComponent implements OnInit {
  dbsForm = this.fb.group({
    currencyUnit: new FormControl<any>([]),
    companies: new FormControl<any>([]),
    banks: new FormControl<any>([]),
  });

  @Input() saveButtonClickEvent = new EventEmitter();
  @Input() currencyUnitOptions: any[] = [];
  @Input() companiesOptions: any[] = [];
  @Input() banksOptions: any[] = [];
  @Output() dbsFormEvent = new EventEmitter()
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.saveButtonClickEvent.subscribe(res => {
      if (res) {
        this.dbsFormEvent.emit(this.dbsForm);
      }
    });
  }

}
