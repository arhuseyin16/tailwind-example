import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {HeaderConfigAction} from "../../../store/header-config/header-config.action";
import {TimerRefreshComponent} from "./timer-refresh/timer-refresh.component";
import { NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { FusionChartsConfig } from "../../../models/shared/fusion-charts.config";
import { SegmentPositionEnum } from "../../../shared/component/currency-bar-segment/segment-position.enum";
import { SegmentBarConfig } from "../../../shared/component/currency-bar-segment/segment-bar.config";

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
    {label: 'TRY', value: 1},
    {label: 'USD', value: 18.57},
    {label: 'EUR', value: 18.43},
    {label: 'GBP', value: 21.14},
    {label: 'CHF', value: 18.87},
    {label: 'RUB', value: 0.31},
    {label: 'AUD', value: 12.00},
    {label: 'JFY', value: 0.13},
    {label: 'AED', value: 5.06},
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

  accountTypes = [
    {
      label: "Vadeli",
      value: "28504",
      color: '#007ea7'
    },
    {
      label: "Mevduat",
      value: "14633",
      color: '#87bfad'
    },
    {
      label: "Blokeli",
      value: "28715",
      color: '#003249'
    }
  ]

  balanceTypeConfig = new FusionChartsConfig();
  accountTypeConfig = new FusionChartsConfig();

  segmentBarConfigForBalanceType = new SegmentBarConfig();
  segmentBarConfigForAccountType = new SegmentBarConfig();
  constructor(private store: Store) {
    this.store.dispatch(new HeaderConfigAction('TimerRefreshComponent', null));
    this.createBalanceTypeConfig();
    this.createAccountTypeConfig();
    this.segmentBarConfigInitializeForAccountType();
    this.segmentBarConfigInitializeForBalanceType();
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
    this.balanceTypeConfig.width = '100%';
    this.balanceTypeConfig.height = '450';
    this.balanceTypeConfig.pieRadius = '175';
    this.balanceTypeConfig.doughnutRadius = '140'
  }

  createAccountTypeConfig() {
    this.accountTypeConfig.data = this.accountTypes;
    this.accountTypeConfig.numberSuffix = '₺';
    this.accountTypeConfig.legendPosition = 'bottom';
    this.accountTypeConfig.legendNumRows = '1';
    this.accountTypeConfig.legendNumColumns = '1';
    this.accountTypeConfig.defaultCenterLabel = '2.474.394';
    this.accountTypeConfig.width = '100%'
    this.accountTypeConfig.height = '450'
    this.accountTypeConfig.pieRadius = '150'
  }

  segmentBarConfigInitializeForBalanceType() {
      this.segmentBarConfigForBalanceType.data = this.currencies;
      this.segmentBarConfigForBalanceType.position = SegmentPositionEnum.START;
      this.segmentBarConfigForBalanceType.paddingLeft = 79;
  }

  segmentBarConfigInitializeForAccountType() {
      this.segmentBarConfigForAccountType.data = this.currencies;
      this.segmentBarConfigForAccountType.position = SegmentPositionEnum.CENTER;
      this.segmentBarConfigForAccountType.block = true;
      this.segmentBarConfigForAccountType.paddingLeft = 60;
      this.segmentBarConfigForAccountType.paddingRight = 60;
      this.segmentBarConfigForAccountType.width = '100%'
  }

}
