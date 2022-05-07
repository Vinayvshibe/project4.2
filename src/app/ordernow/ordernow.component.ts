import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.css']
})
export class OrdernowComponent implements OnInit {
  product:any
  userquantity:any
  constructor(private api:ProductserviceService) { }

  ngOnInit(): void {
this.product=this.api.getmessage();
this.userquantity=1;
console.log(this.product)

  }
  userquantities(){
    if(this.userquantity==""){
      this.ngOnInit();
    }else{
      this.api.setuserquantity(this.userquantity);
    }
  }

}
