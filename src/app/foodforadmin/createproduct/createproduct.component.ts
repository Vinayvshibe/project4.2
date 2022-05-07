import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  productform= new FormGroup({})
productobj:Product=new Product();

  constructor(private Formbuilder: FormBuilder, private api:ProductserviceService, private router:Router) { }

  ngOnInit(): void {
    this.productform=this.Formbuilder.group({
      name: [""],
      price: [""],
      quantity:[""]
    
    })
  }
  createproduct(){
this.productobj.name=this.productform.value.name;
this.productobj.price=this.productform.value.price;
this.productobj.quantity=this.productform.value.quantity;

console.log(this.productobj)
this.api.postproduct1(this.productobj)
.subscribe(res=>{
  console.log(res);
  
  alert("product created")
},
err=>{
  alert("something went wrong")
})
  }
  

}
