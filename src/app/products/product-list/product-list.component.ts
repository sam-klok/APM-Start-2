import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string='Product List';
  products: any[] = [
    {
      "productId":2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "1/1/2021",
      "description": "15 gallons",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId":5,
      "productName": "Hammer",
      "productCode": "TBX-048",
      "releaseDate": "10/1/2021",
      "description": "Curved hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
