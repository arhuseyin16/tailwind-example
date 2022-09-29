import { Component, OnInit } from '@angular/core';
import { NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../models/shared/fusion-charts.config";

@Component({
  selector: 'app-transactions-dashboard',
  templateUrl: './transactions-dashboard.component.html',
  styleUrls: ['./transactions-dashboard.component.scss']
})
export class TransactionsDashboardComponent implements OnInit {

  moneyList = [
    {
      label: 'transactions-dashboard.money-input',
      value: '4.434.545₺',
      date: '26.09.2022'
    },
    {
      label: 'transactions-dashboard.money-out',
      value: '4.434.545₺',
      date: '26.09.2022'
    },
    {
      label: 'transactions-dashboard.balance-per-day',
      value: '4.434.545₺',
      date: null
    },
  ];

  currencies: NzSegmentedOptions = [
    {label: 'TRY', value: 'TRY'},
    {label: 'USD', value: 'USD'},
    {label: 'EUR', value: 'EUR'},
    {label: 'GBP', value: 'GBP'},
    {label: 'CHF', value: 'CHF'},
    {label: 'RUB', value: 'RUB'},
    {label: 'AUD', value: 'AUD'},
    {label: 'JFY', value: 'JFY'},
    {label: 'AED', value: 'AED'},
  ];

  balanceTypes = [
    {
      label: "Deutsche Bank",
      value: "28504",
      color: '#52b189'
    },
    {
      label: "Akbank",
      value: "14633",
      color: '#dc4333'
    },
    {
      label: "Aktif Bank",
      value: "28715",
      color: '#2c414a'
    },
    {
      label: "Albarak Türk",
      value: "4910",
      color: '#c32f31'
    },
    {
      label: "Alternatif Bank",
      value: "14826",
      color: '#681836'
    },
    {
      label: "Burgan Bank",
      value: "71628",
      color: '#2c6eaa'
    },
    {
      label: "Denizbank",
      value: "49110",
      color: '#95d8da'
    },
    {
      label: "Emlak Katılım",
      value: "5489",
      color: '#52b189'
    },
    {
      label: "Fibabank",
      value: "68128",
      color: '#70a14c'
    },
    {
      label: "Finansbank",
      value: "23874",
      color: '#3c1040'
    },
    {
      label: "Garanti",
      value: "12781",
      color: '#8bb64b'
    },
    {
      label: "Halkbank",
      value: "23871",
      color: '#0d3068'
    },
    {
      label: "HSBC",
      value: "2319",
      color: '#ed6e33'
    },
    {
      label: "ING Bank",
      value: "84261",
      color: '#ee6f2d'
    },
    {
      label: "İş Bankası",
      value: "3278",
      color: '#1f367c'
    },
    {
      label: "Odeabank",
      value: "47523",
      color: '#36434c'
    },
    {
      label: "TEB",
      value: "9657",
      color: '#4ba471'
    },
    {
      label: "Tekstil",
      value: "7452",
      color: '#be3a3a'
    },
    {
      label: "Türkiye Finans",
      value: "52148",
      color: '#f5f5f5'
    },
    {
      label: "Vakıfbank",
      value: "65897",
      color: '#f5b43f'
    },
    {
      label: "Yapıkredi",
      value: "21478",
      color: '#194a8b'
    },
    {
      label: "Ziraatbankası",
      value: "23578",
      color: '#ca2d25'
    }
  ]

  balanceTypeConfig = new FusionChartsConfig();
  accountTypeConfig = new FusionChartsConfig();

  constructor() {
    this.createBalanceTypeConfig();
    this.createAccountTypeConfig();
  }

  ngOnInit(): void {
  }

  createBalanceTypeConfig() {
    this.balanceTypeConfig.data = this.balanceTypes;
    this.balanceTypeConfig.numberSuffix = '₺';
    this.balanceTypeConfig.legendPosition = 'right';
    this.balanceTypeConfig.legendNumRows = '3';
    this.balanceTypeConfig.legendNumColumns = '2';
    this.balanceTypeConfig.defaultCenterLabel = '389.477.778';
  }

  createAccountTypeConfig() {
    this.accountTypeConfig.data = this.balanceTypes;
    this.accountTypeConfig.numberSuffix = '₺';
    this.accountTypeConfig.legendPosition = 'bottom';
    this.accountTypeConfig.legendNumRows = '2';
    this.accountTypeConfig.legendNumColumns = '2';
    this.accountTypeConfig.defaultCenterLabel = '389.477.778';
  }

}
