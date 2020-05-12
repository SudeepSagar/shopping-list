import { Component, OnInit, TemplateRef } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.sass']
})
export class SortComponent implements OnInit {

  sortType: string;
  currentTarget: number;
  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService, private sharedSerivce: SharedDataService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.message = 'Cancelled!';
    this.modalRef.hide();
  }

  public sort(type: string) {
    this.sortType = type;
    this.sharedSerivce.sortBy(this.sortType);
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  public listClicked(e) {
    this.currentTarget = e.currentTarget.value;
  }
}
