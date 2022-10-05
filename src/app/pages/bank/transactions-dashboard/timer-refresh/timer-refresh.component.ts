import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-refresh',
  templateUrl: './timer-refresh.component.html',
  styleUrls: ['./timer-refresh.component.scss']
})
export class TimerRefreshComponent implements OnInit {
  switch = true;
  timerValue: number = 0;
  formatterValue = (value: number): string => `${value} dk`;
  parserValue = (value: string): string => value.replace('dk ', '');

  constructor() { }

  ngOnInit(): void {
  }

}
