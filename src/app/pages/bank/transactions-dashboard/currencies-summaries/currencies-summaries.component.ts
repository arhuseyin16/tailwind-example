import { Component, Input, OnInit } from '@angular/core';
import { NzSegmentedOptions } from "ng-zorro-antd/segmented/types";
import { SegmentPositionEnum } from "../../../../shared/component/segment-bar/segment-position.enum";
import { SegmentBarConfig } from "../../../../shared/component/segment-bar/segment-bar.config";

@Component({
  selector: 'app-currencies-summaries',
  templateUrl: './currencies-summaries.component.html',
  styleUrls: ['./currencies-summaries.component.scss']
})
export class CurrenciesSummariesComponent implements OnInit {

  data: NzSegmentedOptions = [];
  currencySummariesSegmentBarConfig = new SegmentBarConfig();
  currenciesSegmentBarConfig = new SegmentBarConfig();
  selectedIndex = 1;
  @Input() currencyTotals = new Array<any>;
  currencies: NzSegmentedOptions = [
    {label: 'TRY', value: 1},
    {label: 'USD', value: 18.57},
    {label: 'EUR', value: 18.43},
    {label: 'GBP', value: 21.14},
    {label: 'CHF', value: 18.87},
    {label: 'RUB', value: 0.31},
    {label: 'AUD', value: 12.00},
    {label: 'JFY', value: 0.13, className: 'test'},
    {label: 'AED', value: 5.06},
  ];
  bankAccounts = [
    {
      iconPath: 'assets/img/bank-account/akbank.png',
      title: 'Akbank',
      information: [
        {
          accountNumber: '30',
          value: '4033418',
          currency: 'TRY'
        },
        {
          accountNumber: '5',
          value: '199611',
          currency: 'USD'
        },
        {
          accountNumber: '5',
          value: '61997',
          currency: 'EUR'
        },
        {
          accountNumber: '1',
          value: '61997',
          currency: 'CHF'
        },
        {
          accountNumber: '1',
          value: '0',
          currency: 'GBP'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/garanti.png',
      title: 'Garanti',
      information: [
        {
          accountNumber: '25',
          value: '478523',
          currency: 'TRY'
        },
        {
          accountNumber: '12',
          value: '23578',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/yapikredi.png',
      title: 'Yapı Kredi',
      information: [
        {
          accountNumber: '14',
          value: '452479',
          currency: 'TRY'
        },
        {
          accountNumber: '4',
          value: '7541',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/vakifbank.png',
      title: 'VakıfBank',
      information: [
        {
          accountNumber: '13',
          value: '2587',
          currency: 'TRY'
        },
        {
          accountNumber: '135',
          value: '879462',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/teb.png',
      title: 'Teb',
      information: [
        {
          accountNumber: '17',
          value: '879842',
          currency: 'TRY'
        },
        {
          accountNumber: '21',
          value: '987123',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/ziraatbankasi.png',
      title: 'Ziraat Bankası',
      information: [
        {
          accountNumber: '12',
          value: '12313',
          currency: 'TRY'
        },
        {
          accountNumber: '56',
          value: '345345',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/ingbank.png',
      title: 'Ing Bank',
      information: [
        {
          accountNumber: '6',
          value: '3257',
          currency: 'TRY'
        },
        {
          accountNumber: '16',
          value: '65789',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: '',
      title: 'Deutsche',
      information: [
        {
          accountNumber: '25',
          value: '478523',
          currency: 'TRY'
        },
        {
          accountNumber: '12',
          value: '23578',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/aktifbank.png',
      title: 'AktifBank',
      information: [
        {
          accountNumber: '3',
          value: '12341',
          currency: 'TRY'
        },
        {
          accountNumber: '22',
          value: '56224',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/albaraka.png',
      title: 'Albarak',
      information: [
        {
          accountNumber: '14',
          value: '62112',
          currency: 'TRY'
        },
        {
          accountNumber: '23',
          value: '131231',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/burganbank.png',
      title: 'Burgan Bank',
      information: [
        {
          accountNumber: '12',
          value: '23421',
          currency: 'TRY'
        },
        {
          accountNumber: '3',
          value: '1231',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/denizbank.png',
      title: 'Deniz Bank',
      information: [
        {
          accountNumber: '14',
          value: '192837',
          currency: 'TRY'
        },
        {
          accountNumber: '26',
          value: '213123',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/emlak-bank.png',
      title: 'Emlak Bank',
      information: [
        {
          accountNumber: '16',
          value: '12141',
          currency: 'TRY'
        },
        {
          accountNumber: '32',
          value: '2134234',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/fibabanka.png',
      title: 'Fiba Banka',
      information: [
        {
          accountNumber: '13',
          value: '123123',
          currency: 'TRY'
        },
        {
          accountNumber: '14',
          value: '12123',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/finansbank.png',
      title: 'Finansbank',
      information: [
        {
          accountNumber: '18',
          value: '12837',
          currency: 'TRY'
        },
        {
          accountNumber: '19',
          value: '784313',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/halkbankasi.png',
      title: 'Halk Bank',
      information: [
        {
          accountNumber: '7',
          value: '13142',
          currency: 'TRY'
        },
        {
          accountNumber: '9',
          value: '41231',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/hsbc.png',
      title: 'HSBC',
      information: [
        {
          accountNumber: '10',
          value: '987918',
          currency: 'TRY'
        },
        {
          accountNumber: '11',
          value: '1263981',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/isbankasi.png',
      title: 'İş Bankası',
      information: [
        {
          accountNumber: '14',
          value: '73812',
          currency: 'TRY'
        },
        {
          accountNumber: '15',
          value: '123691',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/odeabank.png',
      title: 'Odeabank',
      information: [
        {
          accountNumber: '20',
          value: '129038',
          currency: 'TRY'
        },
        {
          accountNumber: '15',
          value: '981723',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/icbc.png',
      title: 'ICBC',
      information: [
        {
          accountNumber: '22',
          value: '18731',
          currency: 'TRY'
        },
        {
          accountNumber: '7',
          value: '98127',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/turkiyefinans.png',
      title: 'Türkiye Finans',
      information: [
        {
          accountNumber: '12',
          value: '219837',
          currency: 'TRY'
        },
        {
          accountNumber: '3',
          value: '31231',
          currency: 'USD'
        }
      ]
    },
    {
      iconPath: 'assets/img/bank-account/abank.png',
      title: 'Alternatif Bank',
      information: [
        {
          accountNumber: '2',
          value: '1231',
          currency: 'TRY'
        },
        {
          accountNumber: '5',
          value: '17231',
          currency: 'USD'
        }
      ]
    },
  ]

  bankAccountsByCurrency = new Array<any>;
  constructor() {
      this.data = [
        {label: 'Döviz Toplamları', value: 1},
        {label: 'Döviz Dönüşüm', value: 2},
      ];
      this.currencySummariesSegmentBarConfigInitialize();
      this.currenciesSegmentBarConfigInitialize();
      this.currencyBarChange({label: 'TRY'})
  }

  ngOnInit(): void {
  }

  currencySummariesSegmentBarConfigInitialize() {
    this.currencySummariesSegmentBarConfig = new SegmentBarConfig();
    this.currencySummariesSegmentBarConfig.width = '100%';
    this.currencySummariesSegmentBarConfig.data = this.data;
    this.currencySummariesSegmentBarConfig.block = true;
    this.currencySummariesSegmentBarConfig.position = SegmentPositionEnum.CENTER;
    this.currencySummariesSegmentBarConfig.paddingLeft = 27;
    this.currencySummariesSegmentBarConfig.paddingRight = 27;
  }

  currenciesSegmentBarConfigInitialize() {
    this.currenciesSegmentBarConfig.position = SegmentPositionEnum.CENTER;
    this.currenciesSegmentBarConfig.width = '100%';
    this.currenciesSegmentBarConfig.block = true;
    this.currenciesSegmentBarConfig.paddingLeft = 27;
    this.currenciesSegmentBarConfig.paddingRight = 27;
    this.currenciesSegmentBarConfig.data = this.currencies;

  }

  changeSegment(selectedData: any) {
    this.selectedIndex = selectedData.value;
  }

  currencyBarChange(event: any) {
    this.bankAccountsByCurrency = new Array<any>();
    this.bankAccounts.forEach(bankAccount => {
      let information = bankAccount.information.find(i => i.currency === event.label);
      if(information) {
        this.bankAccountsByCurrency.push({iconPath: bankAccount.iconPath, title: bankAccount.title, information});
      }
    });
  }
}
