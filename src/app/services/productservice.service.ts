import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
message:any
userquantity:any
  constructor(private http: HttpClient) {}
    // postproduct(data: any){
    //   return this.http.post<any>("http://localhost:3000/product",data)
    //   .pipe(map((res:any)=>{
    //     return res;
    //   }))
    // }
    postproduct1(data:any){
      return this.http.post<any>("http://localhost:3000/comments",data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    getproduct(){
      return this.http.get<any>("http://localhost:3000/comments/")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    // getproductbyname(name:String){
    //   return this.http.get<any>("http://localhost:3000/comments/"+name)
    //   .pipe(map((res:any)=>{
    //     return res;
    //   }))
    // }
    getproductbyid(id:number){
      return this.http.get<any>("http://localhost:3000/comments/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    deleteproduct(id:number){
      return this.http.delete<any>("http://localhost:3000/comments/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    updateproduct(data:any, id:number){
      return this.http.put<any>("http://localhost:3000/comments/"+id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    getmessage(){
      return (this.message);
    }
    setmessage(data:any){
      this.message=data;
    }
    setuserquantity(data:any){
      this.userquantity=data;
    }
    getuserquantity(){
      return this.userquantity;
    }
      
}
