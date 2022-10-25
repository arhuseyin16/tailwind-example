import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {
  HeaderDropdownAction,
  HeaderDropdownActionClear
} from "../../../store/header-dropdown-valid/header-dropdown.action";
import {HeaderDropdownState} from "../../../store/header-dropdown-valid/header-dropdown.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit, AfterViewInit {
  @Select(HeaderDropdownState.getDropdown) pdfDropdown$?: Observable<any>;
  pdfView = false;

  constructor(private store: Store) {
    this.store.dispatch(new HeaderDropdownActionClear());
  }

  ngOnInit(): void {
  }

  pdfClick() {
    this.pdfView = !this.pdfView;
    this.store.dispatch(new HeaderDropdownAction(false, false, this.pdfView));
  }

  ngAfterViewInit() {
    this.pdfDropdown$?.subscribe(state => {
      this.pdfView = state.pdf;
    });
  }
}
