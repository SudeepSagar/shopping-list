import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListPageService } from './list-page.service';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';
import { element } from 'protractor';

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

    this.subscription = this.sharedService.cartItem$.subscribe(
      cartItem => {
        if (!cartItem) {
          this.cartItem = [];
        } else {
          this.cartItem = cartItem;
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
    // check if cartItem exist
    if (this.cartItem) {
      this.listData['items'].forEach((item, index) => {
        if (!this.cartItem.includes(item)) { // check if cartItem does't have listData value then provide add to cart btn
          this.listData['items'][index].added = false;
        }
      });
    }
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
    this.listData['items'].filter(items => {
      if (itemArray === items) { // check if both array has same array value
        this.apiData.updateData(itemArray);
      }
    });
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
