import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products/products-detail.guard';
import { ProductModule } from './products/product.module';
import { CtestComponent } from './ctest/ctest.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    CtestComponent,

  ],
  imports: [
    BrowserModule,
    //FormsModule,    
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
