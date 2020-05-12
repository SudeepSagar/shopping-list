import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SortComponent } from './sort/sort.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { ListPageService } from './list-page/list-page.service';
import { SharedDataService } from './shared-data.service';
import { CsFilterPipe } from './pipes/cs-filter.pipe';
import { SortFilterPipe } from './pipes/sort-filter.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    SearchComponent,
    HeaderComponent,
    FilterComponent,
    SortComponent,
    CartIconComponent,
    CsFilterPipe,
    SortFilterPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SliderModule,
    ModalModule.forRoot()
  ],
  providers: [ListPageService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
