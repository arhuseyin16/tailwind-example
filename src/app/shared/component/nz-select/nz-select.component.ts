import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HEIGHT_PX} from "../../constants/select-height-px";

@Component({
  selector: 'app-nz-select',
  templateUrl: './nz-select.component.html',
  styleUrls: ['./nz-select.component.scss']
})
export class NzSelectComponent implements OnInit {
  heightPx = HEIGHT_PX;
  @Input() fg: FormGroup = new FormGroup({});
  @Input() controlName?: any;
  @Input() formControlName?: any;
  @Input() optionList: any[] = [];
  @Input() label?: string;
  constructor() { }

  ngOnInit(): void {
  }

  selectChange(e: any) {
    this.optionList.forEach((row: any) => {
      row.status = false;
    });
    e.forEach((e: any) => {
      this.optionList.forEach((row: any) => {
        if (e === row.id) {
          row.status = true;
        }
      });
    });
  }

  checkboxChange(id: number, e: any, type: any, formControl: any) {
    let list = [] as any;
    this.optionList.map((x: any) => {
      if (x.id === id) {
        if (e) {
          list.push(...formControl, id);
        } else {
          formControl.forEach((m: any, i: number) => {
            if (m === id) {
              formControl.splice(i, 1);
            }
          });
          list.push(...formControl);
        }
        x.status = e;
        this.fg.get(type.toString())?.setValue(list);
      }
    });
  }
}
