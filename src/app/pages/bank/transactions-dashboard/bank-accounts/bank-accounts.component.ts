import { AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation, } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { SwiperOptions } from "swiper/types";
import { Store } from "@ngxs/store";
import { SidebarState } from "../../../../store/sidebar/sidebar.state";
import Swiper from "swiper";
import {Router} from "@angular/router";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BankAccountsComponent implements OnInit, AfterViewInit, OnDestroy {
  thumbsSwiper: any;
  swiperChangeId?: number;

  bankAccounts = [
    {
      id: 1,
      iconPath: 'assets/img/bank-account/akbank.png',
      title: 'Akbank',
      information: [
        {
          accountNumber: '30',
          value: '4033418',
          currency: 'TRY'
        },
        {
          accountNumber: '30',
          value: '4033418',
          currency: 'TRY'
        },
        {
          accountNumber: '30',
          value: '4033418',
          currency: 'TRY'
        },
        {
          accountNumber: '30',
          value: '4033418',
          currency: 'TRY'
        },
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
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
  swiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    watchSlidesProgress: true,
    breakpoints: {
      1: {
        spaceBetween: 1,
        slidesPerView: 1
      },
      640: {
        spaceBetween: 1,
        slidesPerView: 2
      },
      768: {
        spaceBetween: 1,
        slidesPerView: 3
      },
      1024: {
        spaceBetween: 1,
        slidesPerView: 5
      },
      1280: {
        spaceBetween: 1,
        slidesPerView: 4
      },
      1440: {
        spaceBetween: 1,
        slidesPerView: 5
      },
      1640: {
        spaceBetween: 30,
        slidesPerView: 6
      }
    }
  };

  constructor(
    private store: Store,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.store.select(SidebarState.getIsCollapse).subscribe(isCollapse => {
      this.swiperConfigChange(isCollapse);
    });
  }

  swiperConfigChange(isCollapse: boolean) {
    if (isCollapse) {
      this.swiperConfig = {
        ...this.swiperConfig,
        breakpoints: {
          ...this.swiperConfig.breakpoints,
          1640: {
            spaceBetween: 30,
            slidesPerView: 7
          }
        }
      }
    } else {
      this.swiperConfig = {
        ...this.swiperConfig,
        breakpoints: {
          ...this.swiperConfig.breakpoints,
          1640: {
            spaceBetween: 30,
            slidesPerView: 6
          }
        }
      }
    }
  }


  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  bankAccountDetail(id: number) {
    this.router.navigate(['ui/bank/bank-account'], {queryParams: {id: id}});

  }

  slideChange(swipers: [swiper: Swiper]) {
    const index = swipers[0].realIndex;
    this.swiperChangeId = this.bankAccounts[index].id;
  }
}
