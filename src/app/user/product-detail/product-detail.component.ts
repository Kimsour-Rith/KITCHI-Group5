import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private service: ApiService, private route: ActivatedRoute){}
  ngOnInit() : void {
    this.route.params.subscribe(params => this.getProductById(params['id']));
  }

  product:Products | undefined;

  getProductById(id:number) {
    this.service.getProductById(id).subscribe((data: Products) => this.product = data);
  }
}
