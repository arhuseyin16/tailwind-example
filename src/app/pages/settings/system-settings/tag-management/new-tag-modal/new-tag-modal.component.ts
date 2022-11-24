import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ModalService} from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-new-tag-modal',
  templateUrl: './new-tag-modal.component.html',
  styleUrls: ['./new-tag-modal.component.scss']
})
export class NewTagModalComponent implements OnInit {

  createdForm = this.fb.group({
    code: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
  });
  constructor(private modalService: ModalService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  close() {
    const result = {
      close: false,
      hoverKey: false
    }
    this.modalService.tagNewRecordCreatedRef?.close(result);
  }

  save() {
    //service
    console.log(this.createdForm);
    const result = {
      close: false,
      hoverKey: false
    }
    this.modalService.tagNewRecordCreatedRef?.close(result);
  }

}
