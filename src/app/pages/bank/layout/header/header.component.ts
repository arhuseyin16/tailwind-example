import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  switch = true;
  timerValue: number = 0;
  formatterValue = (value: number): string => `${value} dk`;
  parserValue = (value: string): string => value.replace('dk ', '');

  constructor() { }

  ngOnInit(): void {
  }

}
