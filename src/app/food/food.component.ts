import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../Product';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit { 
  productobj:Product[]=[];
 userquantity:any
  product:Product=new Product();
  name:any;
  formname= new FormGroup({})
  constructor( public rs:ProductserviceService,private Formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formname=this.Formbuilder.group({
     
      userquantity:[""]
    
    })
    
    this.rs.getproduct().subscribe((response)=>{
      this.productobj=response;
    })
    
  }
nameproduct(){
  if(this.name==""){
    this.ngOnInit();
  }else{
    
    this.productobj=this.productobj.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }

}
ordernow(row:any){
  this.product.name= row.name;
  this.product.id=row.id;
  this.product.price=row.price;
  this.product.quantity=row.quantity;
  
  this.rs.setmessage(this.product);
}
}
