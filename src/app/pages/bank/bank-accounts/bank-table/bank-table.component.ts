import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bank-table',
  templateUrl: './bank-table.component.html',
  styleUrls: ['./bank-table.component.scss']
})
export class BankTableComponent implements OnInit {
  @Input() bankList: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  detailUrl(child: any) {
    this.router.navigate(['ui/bank/bank-account/detail']);
  }

}
