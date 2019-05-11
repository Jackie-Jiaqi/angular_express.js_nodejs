import { Component, OnInit } from '@angular/core';

import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any = [];
  // products:Product[];
  constructor(private modalService: NzModalService,private router: Router,private service: ProductService) { }

  ngOnInit() {
    this.service.getProduct().subscribe(data => {
      this.products=data;
      console.log("product list = ",this.products);
    });
    
  }
  
  deleteProduct(id){
    this.modalService.confirm({
      nzTitle: 'Delete item',
      nzContent: '<b style="color: red;">Are you sure delete this task?</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzOnOk: () => {this.service.deleteProduct(id).subscribe(
        data=>{
           this.router.navigate(['admin/product-list']);
          //refresh page
          this.products = this.products.filter(products=> products._id !== id);
        }
      );},
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
    
  }

}
