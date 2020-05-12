import {
  Component, OnInit, OnDestroy, TemplateRef
} from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit, OnDestroy {

  filtertItem: any;
  quantity = 1;
  subscription: Subscription;
  modalRef: BsModalRef;
  message: string;

  // Filter Variables
  minPrice: number = 0;
  maxPrice: number = 0;
  public type: string = 'Range';
  public tooltip: object = { placement: 'After', isVisible: true, showOn: 'Focus' };
  refreshedValues: number[];

  constructor(private modalService: BsModalService, private sharedService: SharedDataService) {
    this.subscription = this.sharedService.filtertItem$.subscribe(
      filtertItem => {
        this.filtertItem = filtertItem;
      });
  }

  ngOnInit() {
    this.findMaxPrice();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.message = 'Cancelled!';
    this.modalRef.hide();
  }

  findMaxPrice() {
    let tmp;
    for (let i = this.filtertItem.items.length - 1; i >= 0; i--) {
      tmp = this.filtertItem.items[i].price.display;
      if (tmp > this.maxPrice) {
        this.maxPrice = tmp;
      } else if (tmp < this.minPrice) {
        this.minPrice = tmp;
      }
    }
  }

  onSliderChange(selectedValues: number[]) {
    this.refreshedValues = selectedValues;
  }

  applyFilter() {
    this.sharedService.filterRange(this.refreshedValues);
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
