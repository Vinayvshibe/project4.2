import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
product:any
userquantity:any
  constructor(private api:ProductserviceService) { }

  ngOnInit(): void {
    this.userquantity=this.api.getuserquantity();
    this.product=this.api.getmessage();
   
  }

}
