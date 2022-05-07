import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/services/productservice.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
productdata :any;
  constructor(private api:ProductserviceService, private router:Router) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
      this.productdata=res;
      if(this.productdata==null){
        alert("no products are there")
      }
    })
  }
  getallproduct(){
   this.ngOnInit() ;
  }

}
