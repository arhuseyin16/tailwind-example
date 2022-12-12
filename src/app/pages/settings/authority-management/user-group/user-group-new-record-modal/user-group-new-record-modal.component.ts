import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../../../service/modal-service/modal.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-group-new-record-modal',
  templateUrl: './user-group-new-record-modal.component.html',
  styleUrls: ['./user-group-new-record-modal.component.scss']
})
export class UserGroupNewRecordModalComponent implements OnInit {

  createdForm = this.fb.group({
    groupName: new FormControl('', Validators.required),
    userAssignment: new FormControl('', Validators.required),
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
    this.modalService.userGroupNewRecordRef?.close(result);
  }

  save() {
    //service
    console.log(this.createdForm);
    const result = {
      close: false,
      hoverKey: false
    }
    this.modalService.userGroupNewRecordRef?.close(result);
  }

}
