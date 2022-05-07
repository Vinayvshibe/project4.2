import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { User } from '../User';
import {ApiService } from '../services/api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userobj: User=new User();
  constructor(private Formbuilder: FormBuilder, private api:ApiService, private router:Router) { }

  ngOnInit() :void{
this.loginform=this.Formbuilder.group({
  name: [""],
  password: [""]

})
  }
postadmin(){
  this.userobj.name=this.loginform.value.name;
  this.userobj.password=this.loginform.value.password;

  this.api.postAdmin(this.userobj)
  .subscribe(res=>{
    console.log(res);
    alert("admin created")
  },
  err=>{
    alert("something went wrong")
  })
}
  loginform = new FormGroup(
    {
     
    }

  )
  deleteadmin(){
   this.api.deleteadmin(2)
   .subscribe(res=>{
    console.log(res);
    alert("admin deleted")
  },
  err=>{
    alert("something went wrong")
  })
  }
  validateadmin(){

    this.api.getadminbyid(1).subscribe(
      data=>{
        console.log(data)
        if(this.loginform.value.name==data.name && this.loginform.value.password==data.password){
          localStorage.setItem('currentUser',JSON.stringify(data));
          
          this.router.navigate(['/welcomeadmin']);
        }
        else{
          alert("Please Enter valid Credentials")
        }
      }
    )
   
  }
  get user() {
    return this.loginform.get("name")
  }
  get password() {
    return this.loginform.get("password")
  }

}
