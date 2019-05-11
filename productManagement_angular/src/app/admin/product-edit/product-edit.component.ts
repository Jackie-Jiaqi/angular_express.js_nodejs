import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  myForm: FormGroup;
  
  constructor(private service: ProductService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() { var product_id: any;
    this.myForm = new FormGroup(
    {
      _id: new FormControl(''), 
      title: new FormControl('',[Validators.required]),
      detail: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
    }
  ); 
  // this.route.params.subscribe(params=>{
  //   product_id = params.id;
  // });

  // product_id = this.route.snapshot.queryParams["id"];
  this.route.queryParams.subscribe(params=>{
       product_id = params.id;
       console.log('product_id',product_id);
     });
  this.service.getProductById(product_id).subscribe(data=>{
    console.log('data',data);
    this.myForm.setValue(data);
  }); 
  }
  onSubmit(){
    if (this.myForm.valid){
    this.service.editProduct(this.myForm.value._id,this.myForm.value).subscribe(
      data => {
        this.router.navigate(['/admin/product-list']);
      }
    );}
  }

}
