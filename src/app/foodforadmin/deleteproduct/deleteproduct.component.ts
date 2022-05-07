import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  productform= new FormGroup({})
  productobj:Product=new Product();
  constructor(private Formbuilder: FormBuilder, private api:ProductserviceService, private router:Router) { }

  ngOnInit(): void {
    this.productform=this.Formbuilder.group({
      id:[""]
    
    })
  }
  deleteproduct()
  {
    this.productobj.id=this.productform.value.id;
    console.log(this.productobj.id)
    this.api.deleteproduct(this.productobj.id)
    .subscribe(res=>{
      console.log(res);
      
      alert("product Removed")
    },
    err=>{
      alert("something went wrong")
    })
  }

}
