import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../User';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
adminobj: User = new User();
  constructor(private Formbuilder: FormBuilder, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.Formbuilder.group({
      name: [""],
      oldpassword: [""],
      newpassword: [""]
    
    })
  }
  loginform = new FormGroup(
    {
     
    }

  )
  updateadmin(){
    this.adminobj.name=this.loginform.value.name;
    this.adminobj.password=this.loginform.value.newpassword;
    this.api.updateadmin(this.adminobj,1).subscribe(res=>{
      console.log(res);
      alert("admin updated")
    },
    err=>{
      alert("something went wrong")
    })
  }
  changepassword(){

    this.api.getadminbyid(1).subscribe(
      data=>{
        console.log(data)
        if(this.loginform.value.name==data.name && this.loginform.value.oldpassword==data.password){
         // localStorage.setItem('currentUser',JSON.stringify(data));
       this.updateadmin();
          this.router.navigate(['/welcomeadmin']);
        }
        else{
          alert("Please Enter valid Credentials")
        }
      }
    )
   
  }

}
