import {NgxsDevtoolsOptions} from "@ngxs/devtools-plugin";
import {environment} from "../../environments/environment";
import {NgxsConfig} from "@ngxs/store/src/symbols";
import {HeaderConfigState} from "./header-config/header-config.state";
import {FavoriteState} from "./favorite/favorite.state";
import {FavoriteListState} from "./favorite/favorite-list.state";
import { SidebarState } from "./sidebar/sidebar.state";
import {HeaderDropdownState} from "./header-dropdown-valid/header-dropdown.state";

export const STATES_MODULES = [
  HeaderConfigState, FavoriteState, FavoriteListState,  SidebarState, HeaderDropdownState
];

export const STORAGE_MODULES = {
  key: ['headerConfig', 'favorite', 'favoriteList', 'sidebar', 'headerDropdown']
};

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  /**
   * Run in development mode. This will add additional debugging features:
   * - Object.freeze on the state and actions to guarantee immutability
   * import { environment } from '@env';
   * developmentMode: !environment.production
   */
  developmentMode: !environment.production,
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  /**
   * Whether the dev tools is enabled or note. Useful for setting during production.
   * import { environment } from '@env';
   * disabled: environment.production
   */
  disabled: environment.production,
};
