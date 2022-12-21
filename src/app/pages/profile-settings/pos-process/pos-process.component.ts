import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pos-process',
  templateUrl: './pos-process.component.html',
  styleUrls: ['./pos-process.component.scss']
})
export class PosProcessComponent implements OnInit {
  @Input() authData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
