import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {

  toggleSearch = false;
  enableCounter = false;
  cartItem: any;
  arrayCount: any;
  subscription: Subscription;
  cartLength: number;
  constructor(private sharedService: SharedDataService) {
    this.subscription = this.sharedService.cartItem$.subscribe(
      cartItem => {
        this.cartItem = cartItem;
        if (this.cartItem && this.cartItem.length > 0) {
          this.cartLength = this.cartItem.length;
          this.enableCounter = true;
        } else {
          this.enableCounter = false;
        }
      });

    this.subscription = this.sharedService.arrayCount$.subscribe(
      arrayCount => {
        this.arrayCount = arrayCount;
        if (this.arrayCount && this.arrayCount.length > 0) {
          this.cartLength = this.arrayCount.length;
          this.enableCounter = true;
        } else {
          this.enableCounter = false;
        }
      });
  }

  ngOnInit() {
  }

  toggleSearchBox() {
    this.toggleSearch = !this.toggleSearch;
    this.sharedService.showSearchBox(this.toggleSearch);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
