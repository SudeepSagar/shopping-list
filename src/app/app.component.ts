import { Component } from '@angular/core';
import { ListPageService } from './list-page/list-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shopping-list';
}
