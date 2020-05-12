import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.sass']
})
export class CartIconComponent implements OnInit, OnDestroy {
  cartItem: any;
  quantity: any;
  subscription: Subscription;
  actualPrice: number = 0;
  totalDisc: number = 0;
  ItemPrice: number = 0;
  btnDisabled: boolean = false;
  constructor(private sharedService: SharedDataService) {
    this.subscription = this.sharedService.cartItem$.subscribe(
      cartItem => {
        this.cartItem = cartItem;
      });
  }

  ngOnInit(): void {
    if (this.cartItem) {
      this.cartDetails();
    }
  }

  minusQuantity(item, index) {
    if (this.cartItem[index]['quantity'] !== 0) {
      +this.cartItem[index]['quantity']--;
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
      const delArray = this.cartItem.indexOf(item, 0);
      if (delArray > -1) {
        this.cartItem.splice(delArray, 1);
      }

    }
    this.cartDetails();
  }

  addQuantity(index) {
    +this.cartItem[index]['quantity']++;
    this.cartDetails();
  }

  cartDetails() {
    let actualSum = 0;
    let dislayPriceSum = 0;
    this.cartItem.forEach(element => {
      if (!element.quantity) {
        element.quantity = 1;
      }
      actualSum = actualSum + (element.price.actual * element.quantity);
      dislayPriceSum = dislayPriceSum + (element.price.display * element.quantity);
    });
    this.actualPrice = actualSum;
    this.ItemPrice = dislayPriceSum;
    this.totalDisc = this.actualPrice - this.ItemPrice;
  }

  removeFromCart(item, index) {
    const delArray = this.cartItem.indexOf(item, 0);
    if (delArray > -1) {
      this.cartItem.splice(delArray, 1);
      this.sharedService.updateCartCounter(this.cartItem);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
