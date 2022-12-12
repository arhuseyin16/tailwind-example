import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-selected-auth',
  templateUrl: './selected-auth.component.html',
  styleUrls: ['./selected-auth.component.scss']
})
export class SelectedAuthComponent implements OnInit {
  authForm = this.fb.group({
    user: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required)
  });

  @Input() saveButtonClickEvent = new EventEmitter();
  @Output() authFormEvent = new EventEmitter()

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.saveButtonClickEvent.subscribe(res => {
      if (res) {
        this.authFormEvent.emit(this.authForm);
      }
    });
  }

}
