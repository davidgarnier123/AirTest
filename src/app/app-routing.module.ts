import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { VaultComponent } from './vault/vault.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'tickets',
    component: VaultComponent
  },
  { 
    path: '**', 
    redirectTo: '' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
