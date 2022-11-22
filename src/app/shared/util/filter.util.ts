import { FilterItemModel } from "../../store/filter/filter.action";

export class FilterUtil {
  static generateFilterItems(key: string) {
    let filterItemModel: FilterItemModel = {key: '', title: '', items: []};
    filterItemModel = {
      key,
      title: '',
      items: []
    }
    if (key === 'firm') {
      filterItemModel = {
        ...filterItemModel,
        title: 'Firma',
      }
    } else if (key === 'date') {
      filterItemModel = {
        ...filterItemModel,
        title: 'Tarih',
      }
    } else if(key === 'bank') {
      filterItemModel = {
        ...filterItemModel,
        title: 'Banka',
      }
    } else if(key === 'branch') {
      filterItemModel = {
        ...filterItemModel,
        title: 'Şube',
      }
    } else if(key === 'accountType') {
      filterItemModel = {
        ...filterItemModel,
        title: 'Hesap Türü',
      }
    } else if(key === 'accountNumber') {
      filterItemModel = {
        ...filterItemModel,
        title: 'Hesap Numarası',
      }
    } else if(key === 'amount') {
      filterItemModel = {
        ...filterItemModel,
        title: 'Tutar',
      }
    } else if(key === 'balance') {
      filterItemModel = {
        ...filterItemModel,
        title: 'Bakiye',
      }
    }
    return filterItemModel;
  }
}
