import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  @Input() bankList: any;
  changeIcon = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  detailUrl(child: any) {
    this.router.navigate(['/bank/bank-account/detail'], { queryParams: { id: 1}});
  }
}
