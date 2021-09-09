import { ProductService } from './../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string='Product List';
  imageWidth:number = 50;
  imageMargin:number = 2;
  showImage: boolean = true;
  errorMessage: string = '';
  sub: Subscription | undefined;

  private _listFilter : string = '';
  public get listFilter() : string {
    return this._listFilter;
  }
  public set listFilter(v : string) {
    this._listFilter = v;
    console.log('in list filter seter');
    this.filteredProducts = this.performFilter(v);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product:IProduct)=>product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }


  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  // [
  //   {
  //     "productId":2,
  //     "productName": "Garden Cart",
  //     "productCode": "GDN-0023",
  //     "releaseDate": "1/1/2021",
  //     "description": "15 gallons",
  //     "price": 32.99,
  //     "starRating": 4.2,
  //     "imageUrl": "assets/images/garden_cart.png"
  //   },
  // ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log("I'm in the ngOnInit now.");

    this.sub = 
      this.productService.getProducts().subscribe({
      next: products => {
        this.products = products,
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err,
    });

    //this.products = this.productService.getProductsOld();
    //this.filteredProducts = this.products;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
    console.log('star property clicked ' + message);
  }

}
