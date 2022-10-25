import { inject, Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { SidebarDataModel } from "../../models/shared/sidebar/sidebar-data.model";
import { Store } from "@ngxs/store";
import { SetSidebarDataAction } from "../../store/sidebar/sidebar.action";

@Injectable({
  providedIn: 'root'
})
export class BankResolver implements Resolve<Array<SidebarDataModel>> {
  store = inject(Store);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const menus: Array<SidebarDataModel> = [
      {
        title: 'dashboard',
        menuItemClass: 'mb0',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[22px]',
        icon: 'assets/img/sidebar/dashboard-icon.svg',
        isCollapseClass: 'pl-50',
        isNotCollapseClass: 'pl-15',
        titleClass: 'sidebar-menu-label',
        routerLink: '',
        isDisplayIcon: true
      },

      {
        title: 'sidebar.bank-transactions',
        menuItemClass: 'mt20',
        icon: 'assets/img/sidebar/dashboard-icon.svg',
        iconSpanClass: 'w-[22px]',
        titleClass: 'sidebar-menu-title uppercase font-bold',
        isCollapseClass: 'pl-50',
        isNotCollapseClass: 'pl-15',
        isCollapseCheck: true,
        isDisplayIcon: false
      },

      {
        title: 'sidebar.cash-status',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/wallet-icon.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.account-transactions-system',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/chart2-icon.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[21px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'sidebar.account-activities',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.bank-accounts',
            routerLink: 'bank-account',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.other-reports',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/file-icon.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[21px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.maintenance-screens',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/settings.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[18px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.finance-screens',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/profit.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[23px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.erp-integration-processes',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/profit.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[23px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.sync-management',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/synchronization.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[22px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.sync-maintenance',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/synchronization-1.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[22px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.sync-control-reports',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/report.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[27px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },

      {
        title: 'sidebar.sync-transaction-reports',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/analytics.svg',
        iconSpanClass: 'w-[22px]',
        iconClass: 'w-[22px] h-[27px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'Option 1',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'Option 2',
            routerLink: '',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          }
        ]
      },
    ];
    debugger
    this.store.dispatch(new SetSidebarDataAction(menus));
  }
}
