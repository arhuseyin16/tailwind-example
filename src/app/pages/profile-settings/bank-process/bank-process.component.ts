import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bank-process',
  templateUrl: './bank-process.component.html',
  styleUrls: ['./bank-process.component.scss']
})
export class BankProcessComponent implements OnInit {
  @Input() authData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
