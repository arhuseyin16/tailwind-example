import { Component, OnInit } from '@angular/core';
import { EChartsOption } from "echarts";

@Component({
  selector: 'app-doughnut-echart',
  templateUrl: './doughnut-echart.component.html',
  styleUrls: ['./doughnut-echart.component.scss']
})
export class DoughnutEchartComponent implements OnInit {

  balanceTypes =   [
    {
      name: "Deutsche Bank",
      value: "28504",
      colorBy: '#52b189'
    },
    {
      name: "Akbank",
      value: "14633",
      colorBy: '#dc4333'
    },
    {
      name: "Aktif Bank",
      value: "28715",
      colorBy: '#2c414a'
    },
    {
      name: "Albarak Türk",
      value: "4910",
      colorBy: '#c32f31'
    },
    {
      name: "Alternatif Bank",
      value: "14826",
      colorBy: '#681836'
    },
    {
      name: "Burgan Bank",
      value: "71628",
      colorBy: '#2c6eaa'
    },
    {
      name: "Denizbank",
      value: "49110",
      colorBy: '#95d8da'
    },
    {
      name: "Emlak Katılım",
      value: "5489",
      colorBy: '#52b189'
    },
    {
      name: "Fibabank",
      value: "68128",
      colorBy: '#70a14c'
    },
    {
      name: "Finansbank",
      value: "23874",
      colorBy: '#3c1040'
    },
    {
      name: "Garanti",
      value: "12781",
      colorBy: '#8bb64b'
    },
    {
      name: "Halkbank",
      value: "23871",
      colorBy: '#0d3068'
    },
    {
      name: "HSBC",
      value: "2319",
      colorBy: '#ed6e33'
    },
    {
      name: "ING Bank",
      value: "84261",
      colorBy: '#ee6f2d'
    },
    {
      name: "İş Bankası",
      value: "3278",
      colorBy: '#1f367c'
    },
    {
      name: "Odeabank",
      value: "47523",
      colorBy: '#36434c'
    },
    {
      name: "TEB",
      value: "9657",
      colorBy: '#4ba471'
    },
    {
      name: "Tekstil",
      value: "7452",
      colorBy: '#be3a3a'
    },
    {
      name: "Türkiye Finans",
      value: "52148",
      colorBy: '#f5f5f5'
    },
    {
      name: "Vakıfbank",
      value: "65897",
      colorBy: '#f5b43f'
    },
    {
      name: "Yapıkredi",
      value: "21478",
      colorBy: '#194a8b'
    },
    {
      name: "Ziraatbankası",
      value: "23578",
      colorBy: '#ca2d25'
    }
  ];
 /* balanceTypesLegend =   [
    {
      name: "Deutsche Bank",
      value: "28504",
      colorBy: '#52b189'
    },
    {
      name: "Akbank",
      value: "14633",
      colorBy: '#dc4333'
    },
    {
      name: "Aktif Bank",
      value: "28715",
      colorBy: '#2c414a'
    },
    {
      name: "Albarak Türk",
      value: "4910",
      colorBy: '#c32f31'
    },
    {
      name: "Alternatif Bank",
      value: "14826",
      colorBy: '#681836'
    },
    {
      name: "Burgan Bank",
      value: "71628",
      colorBy: '#2c6eaa'
    },
    {
      name: "Denizbank",
      value: "49110",
      colorBy: '#95d8da'
    },
    {
      name: "Emlak Katılım",
      value: "5489",
      colorBy: '#52b189'
    },
    {
      name: "Fibabank",
      value: "68128",
      colorBy: '#70a14c'
    },
    {
      name: "Finansbank",
      value: "23874",
      colorBy: '#3c1040'
    },
    {
      name: "Garanti",
      value: "12781",
      colorBy: '#8bb64b'
    },
    {
      name: "Halkbank",
      value: "23871",
      colorBy: '#0d3068'
    },
    {
      name: "HSBC",
      value: "2319",
      colorBy: '#ed6e33'
    },
    {
      name: "ING Bank",
      value: "84261",
      colorBy: '#ee6f2d'
    },
    {
      name: "İş Bankası",
      value: "3278",
      colorBy: '#1f367c'
    },
    {
      name: "Odeabank",
      value: "47523",
      colorBy: '#36434c'
    },
    {
      name: "TEB",
      value: "9657",
      colorBy: '#4ba471'
    },
    {
      name: "Tekstil",
      value: "7452",
      colorBy: '#be3a3a'
    },
    {
      name: "Türkiye Finans",
      value: "52148",
      colorBy: '#f5f5f5'
    },
    {
      name: "Vakıfbank",
      value: "65897",
      colorBy: '#f5b43f'
    },
    {
      name: "Yapıkredi",
      value: "21478",
      colorBy: '#194a8b'
    },
    {
      name: "Ziraatbankası",
      value: "23578",
      colorBy: '#ca2d25'
    }
  ];
  */
  chartOption: EChartsOption  = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'auto',
      right: 'right',
      data: []
    },
    series: [

    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
