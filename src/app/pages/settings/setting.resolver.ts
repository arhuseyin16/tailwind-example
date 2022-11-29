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
export class SettingResolver implements Resolve<Array<SidebarDataModel>> {
  store = inject(Store);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const menus: Array<SidebarDataModel> = [
      {
        title: 'dashboard',
        menuItemClass: 'mb0',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[22px]',
        icon: 'assets/img/sidebar/dashboard-icon.svg',
        isCollapseClass: 'pl-50',
        isNotCollapseClass: 'pl-15',
        titleClass: 'sidebar-menu-label',
        routerLink: '',
        isDisplayIcon: true
      },
      {
        title: 'sidebar.settings',
        menuItemClass: 'mt20',
        icon: 'assets/img/sidebar/dashboard-icon.svg',
        iconSpanClass: 'w-[22px] block',
        titleClass: 'sidebar-menu-title uppercase font-bold',
        isCollapseClass: 'pl-50',
        isNotCollapseClass: 'pl-15',
        routerLink: '/ui/setting/exchange',
        isCollapseCheck: true,
        isDisplayIcon: false
      },
      {
        title: 'sidebar.exchange',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/exchange.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        routerLink: '/ui/setting/exchange',
        titleClass: 'ml-[9px]',
        isCollapseCheck: false,
      },
      {
        title: 'sidebar.erp-api-setting-screen',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/erp-api.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        routerLink: '/ui/setting/exchange',
        titleClass: 'ml-[9px]',
        isCollapseCheck: false,
      },
      {
        title: 'sidebar.system-logs',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/system-logs.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        routerLink: '/ui/setting/exchange',
        titleClass: 'ml-[9px]',
        isCollapseCheck: false,
      },
      {
        title: 'sidebar.system-notification',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/system-notification.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        routerLink: '/ui/setting/exchange',
        titleClass: 'ml-[9px]',
        isCollapseCheck: false,
      },
      {
        title: 'sidebar.collective-user-auth',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/collective-user-auth.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        routerLink: '/ui/setting/exchange',
        titleClass: 'ml-[9px]',
        isCollapseCheck: false,
      },
      {
        title: 'sidebar.auth-management',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/auth-management.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        routerLink: '/ui/setting/exchange',
        titleClass: 'ml-[9px]',
        isCollapseCheck: false,
      },
      {
        title: 'sidebar.system-tools',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/system-tools.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        routerLink: '/ui/setting/exchange',
        titleClass: 'ml-[9px]',
        isCollapseCheck: false,
      },
      {
        title: 'sidebar.system-documents',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/system-documents.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        routerLink: '/ui/setting/exchange',
        titleClass: 'ml-[9px]',
        isCollapseCheck: false,
      },
      {
        title: 'sidebar.system-settings',
        menuItemClass: 'mt16 sidebar-base-menu-label mb0',
        icon: 'assets/img/sidebar/system-setting.svg',
        iconSpanClass: 'w-[22px] block',
        iconClass: 'w-[22px] h-[19px]',
        isCollapseClass: 'ml4-minus',
        isNotCollapseClass: 'ml9-minus',
        isCollapseCheck: false,
        titleClass: 'ml-[9px]',
        children: [
          {
            title: 'sidebar.system-holiday-definitions',
            routerLink: '/ui/setting/system-settings/holiday',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.currency-integration-definition',
            routerLink: '/ui/setting/system-settings/currency-integration',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.LDAP-user-Sync',
            routerLink: '/ui/setting/system-settings/ldap',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.tag-management',
            routerLink: '/ui/setting/system-settings/tag',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.erp-api-settings',
            routerLink: '/ui/setting/system-settings/erp',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.environment-settings',
            routerLink: '/ui/setting/system-settings/environment',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.eho-signer',
            routerLink: '/ui/setting/system-settings/eho-signer',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.system-mail-settings',
            routerLink: '/ui/setting/system-settings/mail',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
          {
            title: 'sidebar.dbs-settings',
            routerLink: '/ui/setting/system-settings/dbs',
            menuItemClass: 'mt16 sidebar-base-menu-label mb0'
          },
        ]
      },
    ];
    this.store.dispatch(new SetSidebarDataAction(menus));
  }
}
