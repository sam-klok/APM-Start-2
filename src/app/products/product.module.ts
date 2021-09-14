import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    //StarComponent,  // moved to shared.module.ts
    ProductDetailComponent,
  ],
  imports: [
    //CommonModule,
    //FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { 
        path: 'products/:id', 
        canActivate: [ProductsDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
