import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  toggleSearch = false;
  constructor(private sharedService: SharedDataService) { }

  ngOnInit() {
  }

  toggleSearchBox() {
    this.toggleSearch = !this.toggleSearch;
    this.sharedService.showSearchBox(this.toggleSearch);
  }
}
