import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreComponent } from './store/store.component';
import { PaymentComponent } from './payment/payment.component';
import { VaultComponent } from './vault/vault.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './shared/button/button.component';
import { ProductComponent } from './store/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    PaymentComponent,
    VaultComponent,
    FooterComponent,
    ButtonComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
