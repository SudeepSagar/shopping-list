import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListPageService } from './list-page.service';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.sass']
})
export class ListPageComponent implements OnInit, OnDestroy {

  listData: any;
  filterRangeVal: any;
  sortType: string;
  cartItem = [];
  addedToCart = false;
  seachParam: any;
  subscription: Subscription;
  min: number = 0;
  max: number = 0;

  constructor(private apiData: ListPageService, private sharedService: SharedDataService) {

    // Filter on listPage
    this.subscription = this.sharedService.filterRangeVal$.subscribe(
      filterRangeVal => {
        this.filterRangeVal = filterRangeVal;
        if ((this.filterRangeVal !== null) && (Object.keys(this.filterRangeVal.length > 0))) {
          this.applyFilter();
        }
      });

    // sort on listPage
    this.subscription = this.sharedService.sortType$.subscribe(
      sortType => {
        this.sortType = sortType;
      });

    // searching on listPage
    this.subscription = this.sharedService.seachParam$.subscribe(
      seachParam => {
        this.seachParam = seachParam;
      });

  }

  ngOnInit() {

    // commneted working code for API data
    // this.apiData.getList().subscribe((data) => {
    // });

    this.listData = this.apiData.fetchData();
    this.listData['items'].forEach(element => {
      element.added = false;
    });
    if (Object.keys(this.listData.length > 0)) {
      this.sharedService.sendToFilter(this.listData);
    }
    this.findMaxPrice();
  }

  applyFilter() {
    this.min = this.filterRangeVal ? this.filterRangeVal.value[0] : this.min;
    this.max = this.filterRangeVal ? this.filterRangeVal.value[1] : this.max;
  }

  findMaxPrice() {
    let tmp;
    for (let i = this.listData.items.length - 1; i >= 0; i--) {
      tmp = this.listData.items[i].price.display;
      if (tmp > this.max) {
        this.max = tmp;
      } else if (tmp < this.min) {
        this.min = tmp;
      }
    }
  }

  public addTocart(itemArray) {
    itemArray.added = true;
    if (itemArray) {
      this.cartItem.push(itemArray);
      if (this.cartItem.length > 0) {
        this.sharedService.publishData(this.cartItem);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
