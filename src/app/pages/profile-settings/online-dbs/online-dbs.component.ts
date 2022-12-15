import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-online-dbs',
  templateUrl: './online-dbs.component.html',
  styleUrls: ['./online-dbs.component.scss']
})
export class OnlineDbsComponent implements OnInit {
  @Input() authData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
