import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  productform= new FormGroup({})
productobj:Product=new Product();

  constructor(private Formbuilder: FormBuilder, private api:ProductserviceService, private router:Router) { }

  ngOnInit(): void {
    this.productform=this.Formbuilder.group({
      id: [""],
      name: [""],
      price: [""],
      quantity:[""]
    
    })
  }

  updateproduct(){
    this.productobj.id=this.productform.value.id;
    this.productobj.name=this.productform.value.name;
this.productobj.price=this.productform.value.price;
this.productobj.quantity=this.productform.value.quantity;

console.log(this.productobj);
this.api.updateproduct(this.productobj,this.productobj.id)
.subscribe(res=>{
  console.log(res);
  
  alert("product updated")
},
err=>{
  alert("something went wrong")
})
  }

}
