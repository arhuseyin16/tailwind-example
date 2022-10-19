import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { SetIsCollapseAction } from "../../../store/sidebar/sidebar.action";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  isCollapsed = false

  ngOnInit(): void {
  }
}
