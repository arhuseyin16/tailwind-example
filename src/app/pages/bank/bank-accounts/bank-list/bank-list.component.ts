import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  @Input() bankList: any;
  changeIcon = true;
  primaryElement: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.bankAccountRoutingController();

  }

  detailUrl(child: any) {
    this.router.navigate(['ui/bank/bank-account/detail'], { queryParams: { id: 1}});
  }

  bankAccountRoutingController(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.bankList.forEach((val: any, index: number) => {
          if (val.id === Number(params.id)) {
            this.primaryElement = val;
            this.bankList.splice(index, 1);
          }
        });
        this.bankList.unshift(this.primaryElement);
      }
    });
  }
}
