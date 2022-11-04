import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-detail-title',
  templateUrl: './header-detail-title.component.html',
  styleUrls: ['./header-detail-title.component.scss']
})
export class HeaderDetailTitleComponent implements OnInit, AfterViewInit {
  @Input() backComponentName?: string;
  @Input() backUrl?: string;
  @Input() detailTitle?: string;

  constructor(private store: Store,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  routerBack() {
    if (this.backUrl) {
      this.router.navigate([this.backUrl]);
    }
  }
}
