import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  toggleSearch: boolean;
  subscription: Subscription;
  searchText: any;
  constructor(private sharedService: SharedDataService) {
    this.subscription = this.sharedService.toggleSearch$.subscribe(
      toggleSearch => {
        this.toggleSearch = toggleSearch;
      });
   }

  ngOnInit() {
  }

  public searchTextValue(e) {
    this.sharedService.sendSearchValue(e.target.value);
  }

}
