import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, pipe } from 'rxjs';
import {User} from '../User'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
// private userlist: User[]=[{
//   id: 1,
//   name: 'admin',
//   password: 'admin@123'
// }]
  constructor(private http: HttpClient) {}
    postAdmin(data: any){
      return this.http.post<any>("http://localhost:3000/posts",data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    
    getadmin(){
      return this.http.get<any>("http://localhost:3000/posts/")
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    getadminbyid(id:number){
      return this.http.get<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    deleteadmin(id:number){
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
    updateadmin(data:any, id:number){
      return this.http.put<any>("http://localhost:3000/posts/"+id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }


}

   

