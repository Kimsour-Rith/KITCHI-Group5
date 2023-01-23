import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private service : ApiService) { }

  products: Products[] = [];


  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    // this.service.getAllProducts().subscribe((data: Products[]) => this.products = data);
    this.service.getAllProducts().subscribe((data: Products[]) => this.products = data);
  }

  getAllCategory(){

  }
}
