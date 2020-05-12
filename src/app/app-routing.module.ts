import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListPageComponent } from './list-page/list-page.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';


const routes: Routes = [
  { path: '',   redirectTo: '/list-page', pathMatch: 'full' },
  { path: 'cart', component: CartIconComponent },
  { path: '**', component: ListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
