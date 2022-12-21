import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ModalService} from "../../../service/modal-service/modal.service";

@Component({
  selector: 'app-auth-edit-modal',
  templateUrl: './auth-edit-modal.component.html',
  styleUrls: ['./auth-edit-modal.component.scss']
})
export class AuthEditModalComponent implements OnInit {

  editForm = this.fb.group({
    authScheme: new FormControl('', Validators.required),
    screen: new FormControl('', Validators.required),
    auth: new FormControl([], Validators.required)
  });

  authOption = [
    {id: 1, name: 'Admin'},
    {id: 2, name: 'Front'},
    {id: 3, name: 'BackEnd'},
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
    this.modalService.bankAuthEditRef?.close(result);
  }

  save() {
    //service
    console.log(this.editForm);
    const result = {
      close: false,
      hoverKey: false
    }
    this.modalService.bankAuthEditRef?.close(result);
  }
}
