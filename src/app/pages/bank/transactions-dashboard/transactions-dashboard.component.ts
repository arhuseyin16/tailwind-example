import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { HeaderConfigAction } from "../../../store/header-config/header-config.action";
import { NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { SidebarState } from "../../../store/sidebar/sidebar.state";
import { ChartConfigUpdated } from "../../../store/chart/chart.action";
import { HeaderConfigModel } from "../../../models/header-config-model";
import { FavoriteStateModel } from "../../../models/favorite-state.model";
import { FavoriteAction } from "../../../store/favorite/favorite.action";
import { Router } from "@angular/router";
import { SegmentBarConfig } from "../../../shared/component/segment-bar/segment-bar.config";
import { SegmentPositionEnum } from "../../../shared/component/segment-bar/segment-position.enum";
import { EChartsOption } from "echarts";
import { CurrencyUtil } from "../../../shared/util/currency.util";
import { CurrencyEnum } from "../../../shared/enum/currency.enum";

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

  accountTypes = [
    {
      label: "Vadeli",
      accounts: [
        {
          name: "GBP",
          value: 41614
        },
        {
          name: "AUD",
          value: 23508
        },
        {
          name: "USD",
          value: 24453
        },
        {
          name: "TRY",
          value: 10133
        },
        {
          name: "RUB",
          value: 44026
        }
      ],
      color: '#007ea7'
    },
    {
      label: "Mevduat",
      accounts: [
        {
          name: "TRY",
          value: 1894
        },
        {
          name: "EUR",
          value: 3524
        },
        {
          name: "CHF",
          value: 29840
        },
        {
          name: "USD",
          value: 47678
        },
        {
          name: "GBP",
          value: 22048
        }
      ],
      color: '#87bfad'
    },
    {
      label: "Blokeli",
      accounts: [
        {
          name: "AED",
          value: 32709
        },
        {
          name: "TRY",
          value: 40049
        },
        {
          name: "USD",
          value: 33916
        },
        {
          name: "RUB",
          value: 23267
        },
        {
          name: "AUD",
          value: 33710
        }
      ],
      color: '#003249'
    }
  ];

  currencyTotals = [
    {
      label: "TRY",
      value: "389477778"
    },
    {
      label: "USD",
      value: "4901916"
    },
    {
      label: "EUR",
      value: "5781477"
    },
    {
      label: "CHF",
      value: "78693"
    },
    {
      label: "GBP",
      value: "58769"
    },
    {
      label: "JPY",
      value: "317098"
    },
    {
      label: "AUD",
      value: "0"
    },
  ];

  balanceTypes = [
    {
      label: "Deutsche Bank",
      accounts: [
        {
          name: 'TRY',
          value: 2831
        },
        {
          name: 'USD',
          value: 4567
        },
        {
          name: 'EUR',
          value: 15687
        },
        {
          name: 'GBP',
          value: 68797
        },
        {
          name: 'CHF',
          value: 7985
        },
        {
          name: 'RUB',
          value: 33248
        },
        {
          name: 'AUD',
          value: 15687
        },
        {
          name: 'JFY',
          value: 32497
        },
        {
          name: 'AED',
          value: 8795
        }
      ],
      color: '#52b189'
    },
    {
      label: "Akbank",
      accounts: [
        {
          name: 'TRY',
          value: 28311
        },
        {
          name: 'USD',
          value: 13123
        },
        {
          name: 'EUR',
          value: 32432
        },

        {
          name: 'RUB',
          value: 12312
        },
        {
          name: 'AUD',
          value: 4563
        },
        {
          name: 'JFY',
          value: 3453
        },
        {
          name: 'AED',
          value: 6777
        }
      ],
      color: '#dc4333'
    },
    {
      label: "Aktif Bank",
      accounts: [
        {
          name: 'TRY',
          value: 6755
        },
        {
          name: 'USD',
          value: 56756
        },
        {
          name: 'EUR',
          value: 34532
        },
        {
          name: 'GBP',
          value: 3421
        },
        {
          name: 'CHF',
          value: 45643
        },
      ],
      color: '#2c414a'
    },
    {
      label: "Albarak Türk",
      value: "4910",
      accounts: [
        {
          name: 'CHF',
          value: 3421
        },
        {
          name: 'RUB',
          value: 4645
        },
        {
          name: 'AUD',
          value: 45642
        },
        {
          name: 'JFY',
          value: 23432
        },
        {
          name: 'AED',
          value: 6785
        }
      ],
      color: '#c32f31'
    },
    {
      label: "Alternatif Bank",
      accounts: [
        {
          name: 'TRY',
          value: 2831
        },
        {
          name: 'USD',
          value: 4567
        },
        {
          name: 'EUR',
          value: 15687
        },
        {
          name: 'GBP',
          value: 68797
        },
        {
          name: 'CHF',
          value: 7985
        },
        {
          name: 'RUB',
          value: 33248
        },
        {
          name: 'AUD',
          value: 15687
        },
        {
          name: 'JFY',
          value: 32497
        },
        {
          name: 'AED',
          value: 8795
        }
      ],
      color: '#681836'
    },
    {
      label: "Burgan Bank",
      accounts: [
        {
          name: 'TRY',
          value: 34223
        },
        {
          name: 'USD',
          value: 4537
        },
        {
          name: 'AUD',
          value: 3453
        },
        {
          name: 'JFY',
          value: 23523
        },
        {
          name: 'AED',
          value: 12313
        }
      ],
      color: '#2c6eaa'
    },
    {
      label: "Denizbank",
      accounts: [
        {
          name: "JFY",
          value: 1324
        },
        {
          name: "AED",
          value: 4725
        },
        {
          name: "TRY",
          value: 1655
        },
        {
          name: "AUD",
          value: 4746
        },
        {
          name: "USD",
          value: 1944
        }
      ],
      color: '#95d8da'
    },
    {
      label: "Emlak Katılım",
      accounts: [
        {
          name: "AUD",
          value: 4199
        },
        {
          name: "USD",
          value: 2109
        },
        {
          name: "RUB",
          value: 2674
        },
        {
          name: "TRY",
          value: 2750
        },
        {
          name: "JFY",
          value: 2776
        }
      ],
      color: '#52b189'
    },
    {
      label: "Fibabank",
      accounts: [
        {
          name: "AUD",
          value: 3228
        },
        {
          name: "USD",
          value: 3270
        },
        {
          name: "TRY",
          value: 3080
        },
        {
          name: "CHF",
          value: 4770
        },
        {
          name: "EUR",
          value: 1485
        }
      ],
      color: '#70a14c'
    },
    {
      label: "Finansbank",
      accounts: [
        {
          name: "GBP",
          value: 1934
        },
        {
          name: "EUR",
          value: 4827
        },
        {
          name: "USD",
          value: 3825
        },
        {
          name: "TRY",
          value: 3796
        },
        {
          name: "AUD",
          value: 2736
        }
      ],
      color: '#3c1040'
    },
    {
      label: "Garanti",
      accounts: [
        {
          name: "TRY",
          value: 2370
        },
        {
          name: "CHF",
          value: 1038
        },
        {
          name: "RUB",
          value: 3818
        },
        {
          name: "GBP",
          value: 3441
        },
        {
          name: "AED",
          value: 2637
        }
      ],
      color: '#8bb64b'
    },
    {
      label: "Halkbank",
      accounts: [
        {
          name: "EUR",
          value: 27126
        },
        {
          name: "RUB",
          value: 13166
        },
        {
          name: "AUD",
          value: 1511
        },
        {
          name: "USD",
          value: 41748
        },
        {
          name: "TRY",
          value: 47472
        }
      ],
      color: '#0d3068'
    },
    {
      label: "HSBC",
      accounts: [
        {
          name: "RUB",
          value: 25091
        },
        {
          name: "AED",
          value: 39487
        },
        {
          name: "JFY",
          value: 13652
        },
        {
          name: "TRY",
          value: 25165
        },
        {
          name: "CHF",
          value: 8350
        }
      ],
      color: '#ed6e33'
    },
    {
      label: "ING Bank",
      accounts: [
        {
          name: "GBP",
          value: 43662
        },
        {
          name: "CHF",
          value: 26459
        },
        {
          name: "TRY",
          value: 27335
        },
        {
          name: "RUB",
          value: 12404
        },
        {
          name: "EUR",
          value: 19353
        }
      ],
      color: '#ee6f2d'
    },
    {
      label: "İş Bankası",
      accounts: [
        {
          name: "RUB",
          value: 10642
        },
        {
          name: "JFY",
          value: 7704
        },
        {
          name: "USD",
          value: 15559
        },
        {
          name: "AED",
          value: 29959
        },
        {
          name: "TRY",
          value: 25846
        }
      ],
      color: '#1f367c'
    },
    {
      label: "Odeabank",
      accounts: [
        {
          name: "RUB",
          value: 29257
        },
        {
          name: "EUR",
          value: 15094
        },
        {
          name: "JFY",
          value: 20310
        },
        {
          name: "TRY",
          value: 20623
        },
        {
          name: "GBP",
          value: 21795
        }
      ],
      color: '#36434c'
    },
    {
      label: "TEB",
      accounts: [
        {
          name: "JFY",
          value: 39447
        },
        {
          name: "EUR",
          value: 33677
        },
        {
          name: "TRY",
          value: 20880
        },
        {
          name: "GBP",
          value: 36169
        },
        {
          name: "USD",
          value: 19453
        }
      ],
      color: '#4ba471'
    },
    {
      label: "Tekstil",
      accounts: [
        {
          name: "AUD",
          value: 33107
        },
        {
          name: "CHF",
          value: 17727
        },
        {
          name: "AED",
          value: 4476
        },
        {
          name: "GBP",
          value: 18597
        },
        {
          name: "USD",
          value: 15963
        }
      ],
      color: '#be3a3a'
    },
    {
      label: "Türkiye Finans",
      accounts: [
        {
          name: "EUR",
          value: 4894
        },
        {
          name: "CHF",
          value: 43021
        },
        {
          name: "JFY",
          value: 4609
        },
        {
          name: "RUB",
          value: 28223
        },
        {
          name: "TRY",
          value: 7741
        }
      ],
      color: '#39697b'
    },
    {
      label: "Vakıfbank",
      accounts: [
        {
          name: "GBP",
          value: 44348
        },
        {
          name: "JFY",
          value: 38397
        },
        {
          name: "RUB",
          value: 46210
        },
        {
          name: "TRY",
          value: 47347
        },
        {
          name: "USD",
          value: 32670
        }
      ],
      color: '#f5b43f'
    },
    {
      label: "Yapıkredi",
      accounts: [
        {
          name: "EUR",
          value: 12580
        },
        {
          name: "USD",
          value: 11387
        },
        {
          name: "CHF",
          value: 21242
        },
        {
          name: "GBP",
          value: 48037
        },
        {
          name: "AED",
          value: 48553
        }
      ],
      color: '#194a8b'
    },
    {
      label: "Ziraatbankası",
      accounts: [
        {
          name: "EUR",
          value: 33072
        },
        {
          name: "TRY",
          value: 34806
        },
        {
          name: "AED",
          value: 25414
        },
        {
          name: "JFY",
          value: 41177
        },
        {
          name: "RUB",
          value: 37646
        }
      ],
      color: '#ca2d25'
    }
  ];

  balanceTypeConfig?: EChartsOption;
  accountTypeConfig?: EChartsOption;


  headerConfig: Array<HeaderConfigModel> = new Array<HeaderConfigModel>();
  favoriteModel: FavoriteStateModel = new FavoriteStateModel();

  segmentBarConfigForBalanceType = new SegmentBarConfig();
  segmentBarConfigForAccountType = new SegmentBarConfig();

  constructor(private store: Store, private router: Router) {
    this.headerConfig.push({
      component: () => import('../transactions-dashboard/timer-refresh/timer-refresh.component').then(it => it.TimerRefreshComponent),
      dataObj: null
    });
    this.store.dispatch(new HeaderConfigAction(this.headerConfig));
    this.favoriteModel = {
      name: 'İşlem Hareketleri',
      url: this.router.url
    }
    this.store.dispatch(new FavoriteAction(this.favoriteModel));

    this.generateBalanceTypeConfig();
    this.generateAccountTypeConfig();
    this.segmentBarConfigInitializeForAccountType();
    this.segmentBarConfigInitializeForBalanceType();
  }

  ngOnInit(): void {
  }

  generateBalanceTypeConfig(currency?: CurrencyEnum) {
    // @ts-ignore
    currency = !currency ? this.currencies[0].label : currency;
    let chartDataList: {name: any; value: any; itemStyle: {color: any;}; label: {};}[] = [];
    let chartLegendList: {name: any; itemStyle: {color: any;};}[] = [];
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
            }
          });
          chartLegendList.push({
            name: balanceType.label,
            itemStyle: {
              color: balanceType.color
            }
          });
        }
      });
    });
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
          name: 'Pie Chart',
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
    let chartDataList: {name: any; value: any; itemStyle: {color: any;}; label: {};}[] = [];
    let chartLegendList: {name: any; itemStyle: {color: any;};}[] = [];
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
            }
          });
          chartLegendList.push({
            name: accountType.label,
            itemStyle: {
              color: accountType.color
            }
          });
        }
      });
    });
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
