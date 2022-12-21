import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ModalService} from "../../../../../service/modal-service/modal.service";

@Component({
  selector: 'app-user-group-edit-modal',
  templateUrl: './user-group-edit-modal.component.html',
  styleUrls: ['./user-group-edit-modal.component.scss']
})
export class UserGroupEditModalComponent implements OnInit {

  createdForm = this.fb.group({
    authScheme: new FormControl('', Validators.required),
    modules: new FormControl('', Validators.required),
    screen: new FormControl('', Validators.required),
    auth: new FormControl([], Validators.required),
  });

  authList = [
    {id: 1, name: 'yetki 1'},
    {id: 2, name: 'yetki 2'},
    {id: 3, name: 'yetkii 3'},
  ]

  constructor(private modalService: ModalService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  close() {
    const result = {
      close: false,
      hoverKey: false
    }
    this.modalService.userGroupEditRef?.close(result);
  }

  save() {
    //service
    console.log(this.createdForm);
    const result = {
      close: false,
      hoverKey: false
    }
    this.modalService.userGroupEditRef?.close(result);
  }

}
