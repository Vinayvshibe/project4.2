import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-nameproduct',
  templateUrl: './nameproduct.component.html',
  styleUrls: ['./nameproduct.component.css']
})
export class NameproductComponent implements OnInit {
  productobj:Product[]=[];
  name:any;
  constructor( public rs:ProductserviceService) { }

  ngOnInit(): void {
    
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
}
