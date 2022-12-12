import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-dbs',
  templateUrl: './dbs.component.html',
  styleUrls: ['./dbs.component.scss']
})
export class DbsComponent implements OnInit {
  dbsForm = this.fb.group({
    currencyUnit: new FormControl(''),
    companies: new FormControl(''),
    banks: new FormControl('')
  });

  @Input() saveButtonClickEvent = new EventEmitter();
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
