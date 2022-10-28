import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { HeaderConfigAction } from "../../../store/header-config/header-config.action";
import { NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { HeaderConfigModel } from "../../../models/header-config-model";
import { FavoriteStateModel } from "../../../models/favorite-state.model";
import { FavoriteAction } from "../../../store/favorite/favorite.action";
import { Router } from "@angular/router";
import { SegmentBarConfig } from "../../../shared/component/segment-bar/segment-bar.config";
import { SegmentPositionEnum } from "../../../shared/component/segment-bar/segment-position.enum";
import { EChartsOption } from "echarts";
import { CurrencyUtil } from "../../../shared/util/currency.util";
import { CurrencyEnum } from "../../../shared/enum/currency.enum";
import { BankService } from '../../../service/bank/bank.service';
import { AccountType } from '../../../models/bank/account-type';
import { BalanceType } from '../../../models/bank/balance-type';
import { LabelValueType } from '../../../models/bank/label-value.type';

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
    {label: 'JPY', value: 0.13},
    {label: 'AED', value: 5.06},
  ];

  accountTypes?: Array<AccountType>;
  currencyTotals?: Array<LabelValueType>;
  balanceTypes?: Array<BalanceType>;

  balanceTypeConfig?: EChartsOption;
  accountTypeConfig?: EChartsOption;
  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();
  segmentBarConfigForBalanceType = new SegmentBarConfig();
  segmentBarConfigForAccountType = new SegmentBarConfig();

  constructor(private store: Store, private router: Router,
              private bankService: BankService) {
    this.headerConfig.push({
      component: () => import('../transactions-dashboard/timer-refresh/timer-refresh.component').then(it => it.TimerRefreshComponent),
      dataObj: null
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'favorite-list.bank-transactions',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));

    this.bankService.getAccountTypes().subscribe((accountTypes:Array<AccountType>) => {
      this.accountTypes = accountTypes;
      this.generateAccountTypeConfig();
    });

    this.bankService.getBalanceTypes().subscribe((balanceTypes: Array<BalanceType>) => {
      this.balanceTypes = balanceTypes;
      this.generateBalanceTypeConfig();
    });

    this.bankService.getCurrencyTotals().subscribe((currencyTotals: Array<LabelValueType>) => {
      this.currencyTotals = currencyTotals;
    });

    this.segmentBarConfigInitializeForAccountType();
    this.segmentBarConfigInitializeForBalanceType();
  }

  ngOnInit(): void {
  }

  generateBalanceTypeConfig(currency?: CurrencyEnum) {
    // @ts-ignore
    currency = !currency ? this.currencies[0].label : currency;
    let chartDataList: {name: any; value: any; itemStyle: {color: any;}; label: {}; tooltip: {formatter: any, textStyle: {}}}[] = [];
    let centerChartDataList: {name: string; value: number, itemStyle: {color: any;};}[] = [];
    let chartLegendList: {name: any; itemStyle: {color: any;};}[] = [];
    let totalValue = 0;
    if (this.balanceTypes) {
      this.balanceTypes.forEach(balanceType => {
        balanceType.accounts.forEach((account: any) => {
          if (currency && account.name === currency) {
            chartDataList.push({
              name: balanceType.label,
              value: account.value,
              itemStyle: {
                color: balanceType.color
              },
              label: {
                show: false,
                formatter: `${balanceType.label}\n ${CurrencyUtil.getCurrencySymbolUtilByName(currency, account.value)}`,
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 20,
                fontFamily: 'Poppins',
              },
              tooltip: {
                formatter: `${balanceType.label}<br />${CurrencyUtil.getCurrencySymbolUtilByName(currency, account.value)}`,
                textStyle: {
                  fontSize: 14,
                  fontWeight: 'bold',
                  fontFamily: 'Poppins',
                }
              }
            });
            chartLegendList.push({
              name: balanceType.label,
              itemStyle: {
                color: balanceType.color
              }
            });
            totalValue += account.value;
          }
        });
      });
      if(currency) {
        centerChartDataList.push({
          name: CurrencyUtil.getCurrencySymbolUtilByName(currency, totalValue).toString(),
          value: 0,
          itemStyle: {
            color: '#fff'
          }
        })
      }
    }
    this.balanceTypeConfig = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'auto',
        right: 50,
        top: 60,
        selectedMode: `multiple`,
        itemGap: 12,
        data: [...chartLegendList],
        icon: 'circle',
        height: '75%',
        textStyle: {
          fontSize: 16,
          fontFamily: 'Poppins',
          padding: 8
        },
      },
      series: [
        {
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '36%'],
          right: '45%',
          label: {
            position: 'center',
            fontSize: 18,
            fontWeight: 'bold'
          },
          labelLine: {
            show: false
          },
          tooltip: {
            show: false
          },
          data: [...centerChartDataList]
        },
        {
          type: `pie`,
          id: 'chart-2',
          radius: ['55%', '72%'],
          right: '45%',
          label: {
            show: false,
          },
          data: [
            ...chartDataList
          ],
        }
      ]
    };
  }

  generateAccountTypeConfig(currency?: CurrencyEnum) {
    // @ts-ignore
    currency = !currency ? this.currencies[0].label : currency;
    let chartDataList: {name: any; value: any; itemStyle: {color: any;}; label: {}; tooltip: {formatter: any, textStyle: {}}}[] = [];
    let centerChartDataList: {name: string; value: number, itemStyle: {color: any;};}[] = [];
    let chartLegendList: {name: any; itemStyle: {color: any;};}[] = [];
    let totalValue = 0;
    if (this.accountTypes) {
      this.accountTypes.forEach(accountType => {
        accountType.accounts.forEach((account: any) => {
          if (currency && account.name === currency) {
            chartDataList.push({
              name: accountType.label,
              value: account.value,
              itemStyle: {
                color: accountType.color
              },
              label: {
                show: false,
                formatter: `${accountType.label}\n ${CurrencyUtil.getCurrencySymbolUtilByName(currency, account.value)}`,
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 20,
                fontFamily: 'Poppins',
              },
              tooltip: {
                formatter: `${accountType.label}<br />${CurrencyUtil.getCurrencySymbolUtilByName(currency, account.value)}`,
                textStyle: {
                  fontSize: 14,
                  fontWeight: 'bold',
                  fontFamily: 'Poppins',
                }
              }
            });
            chartLegendList.push({
              name: accountType.label,
              itemStyle: {
                color: accountType.color
              }
            });
            totalValue += account.value;
          }
        });
      });
      if(currency) {
        centerChartDataList.push({
          name: CurrencyUtil.getCurrencySymbolUtilByName(currency, totalValue).toString(),
          value: 0,
          itemStyle: {
            color: '#fff'
          }
        })
      }
    }
    this.accountTypeConfig = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        bottom: 15,
        left: 'center',
        selectedMode: `multiple`,
        itemGap: 10,
        data: [...chartLegendList],
        icon: 'circle',
        textStyle: {
          fontSize: 16,
          fontFamily: 'Poppins',
          padding: 8
        },
      },
      series: [
        {
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '40%'],
          bottom: 80,
          label: {
            position: 'center',
            fontSize: 18,
            fontWeight: 'bold'
          },
          labelLine: {
            show: false
          },
          tooltip: {
            show: false
          },
          data: [...centerChartDataList]
        },
        {
          name: 'Pie Chart',
          type: `pie`,
          id: 'chart-2',
          bottom: 80,
          radius: ['55%', '80%'],
          label: {
            show: false,
          },
          data: [...chartDataList],
        }
      ]
    };
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
    this.segmentBarConfigForAccountType.paddingLeft = 27;
    this.segmentBarConfigForAccountType.paddingRight = 27;
    this.segmentBarConfigForAccountType.width = '100%'
  }

  balanceTypeCurrencyChange(currency: CurrencyEnum) {
    this.generateBalanceTypeConfig(currency);
  }

  accountTypeCurrencyChange(currency: CurrencyEnum) {
    this.generateAccountTypeConfig(currency);
  }
}
