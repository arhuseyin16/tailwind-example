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
  @Input() formControlName: any;
  @Input() optionList: any[] = [];
  @Input() label?: string = '';
  allStatus = false;
  nzSelectLoading = true;
  checked = false;
  setOfCheckedId = new Set<number>();
  constructor() {
  }

  ngOnInit(): void {
    if (this.optionList.length > 0) {
      this.nzSelectLoading = false;
    }
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
    let list = [] as any;
    if (this.setOfCheckedId.size > 0) {
      this.setOfCheckedId.forEach((row: any) => {
        list.push(row);
      });
    }
    this.fg.get(this.formControlName)?.setValue(list);
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.optionList.forEach(item => this.updateCheckedSet(item.id, value));
    this.updateCheckedSet(0, value);
    this.refreshCheckedStatus();
    if (!value) {
      this.setOfCheckedId = new Set<number>();
      this.fg.get(this.formControlName)?.setValue([]);
    }
  }

  refreshCheckedStatus(): void {
    this.checked = this.optionList.every(item => this.setOfCheckedId.has(item.id));
    // this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  selectChange(event: any, type: string, formControl: any) {
    this.setOfCheckedId = new Set<number>();
    let list = [] as any;
    if (event.includes(0) && !this.checked) {
      this.checked = true;
      this.optionList.forEach(row => {
        this.setOfCheckedId.add(row.id);
        this.refreshCheckedStatus();
        list.push(row.id);
      });
      list.push(0);
      this.fg.get(this.formControlName)?.setValue(list);
    } else if (!event.includes(0) && this.checked) {
      this.checked = false;
      this.fg.get(this.formControlName)?.setValue([]);
    } else {
      if (event.includes(0) && this.checked && event.length === this.optionList.length) {
        this.checked = false;
        this.setOfCheckedId = new Set<number>();
        event.forEach((row: any) => {
          if (row !== 0) {
            this.setOfCheckedId.add(row);
            this.refreshCheckedStatus();
            list.push(row);
          }
        });
        this.fg.get(this.formControlName)?.setValue(list);
      } else if (event.length === this.optionList.length) {
        list.push(0);
        this.fg.get(this.formControlName)?.setValue([...list, ...event]);
      } else {
        event.forEach((row: any) => {
          this.setOfCheckedId.add(row);
          this.refreshCheckedStatus();
        });
      }
    }
    // let list = [] as any;
    // this.optionList.forEach((row: any) => {
    //   row.status = false;
    // });
    // if (event.includes(0) && !this.allStatus) {
    //   this.optionList.forEach((row: any) => {
    //     list.push(row.id);
    //     row.status = true;
    //   });
    //   list.push(0);
    //   this.allStatus = true;
    //   this.fg.get(type)?.setValue(list);
    // } else if (!event.includes(0) && this.allStatus) {
    //   this.allStatus = false;
    //   this.fg.get(type)?.setValue([]);
    // } else {
    //   event.forEach((e: any, index: number) => {
    //     this.optionList.forEach((row: any) => {
    //       if (e === row.id) {
    //         row.status = true;
    //       }
    //     });
    //   });
    //   if (event.includes(0)) {
    //     if (event.length !== this.optionList.length + 1) {
    //       event.forEach((e: any, index: number) => {
    //         if (e === 0) {
    //           event.splice(index, 1);
    //         }
    //       });
    //       this.allStatus = false;
    //     }
    //   } else {
    //     if (event.length === this.optionList.length) {
    //       list.push(...formControl, 0);
    //       this.allStatus = true;
    //       this.fg.get(type)?.setValue(list);
    //     }
    //   }
    // }
  }

  checkboxChange(id: number, e: any, type: any, formControl: any) {
    if (typeof formControl === 'string') {
      formControl = [];
    }
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

  allCheckboxChange(e: any, type: string, formControl: any) {
    let list = [] as any;
    if (e) {
      this.optionList.map((x, index) => {
        list.push(x.id);
        x.status = e;
      });
      list.unshift(0); // -tümü- options value
      this.fg.get(type)?.setValue(list);
    } else {
      formControl = [];
      this.fg.get(type)?.setValue([]);
    }
  }
}
