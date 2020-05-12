import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private cartItem = new BehaviorSubject<any>(null);
  public cartItem$ = this.cartItem.asObservable();

  private filtertItem = new BehaviorSubject<any>(null);
  public filtertItem$ = this.filtertItem.asObservable();

  private sortType = new BehaviorSubject<any>(null);
  public sortType$ = this.sortType.asObservable();

  private toggleSearch = new BehaviorSubject<any>(null);
  public toggleSearch$ = this.toggleSearch.asObservable();

  private seachParam = new BehaviorSubject<any>(null);
  public seachParam$ = this.seachParam.asObservable();

  private filterRangeVal = new BehaviorSubject<any>(null);
  public filterRangeVal$ = this.filterRangeVal.asObservable();

  publishData(arrayData) {
    this.cartItem.next(arrayData);
  }

  sendToFilter(allData) {
    this.filtertItem.next(allData);
  }

  filterRange(rangeValue) {
    this.filterRangeVal.next(rangeValue);
  }

  sortBy(type) {
    this.sortType.next(type);
  }

  showSearchBox(enable: boolean) {
    this.toggleSearch.next(enable);
  }

  sendSearchValue(searchString: any) {
    this.seachParam.next(searchString);
  }
}
