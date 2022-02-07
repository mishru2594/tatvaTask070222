import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }

  signupPost(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
  }
  loginUser(){
    return this.http.get<any>("http://localhost:3000/posts")
  }
  postBlog(data:any){
    return this.http.post<any>("http://localhost:3000/blog",data)
  }
  getBlog(){
    return this.http.get<any>("http://localhost:3000/blog")
  }
  delBlog(id:any){
    return this.http.delete<any>("http://localhost:3000/blog"+id)
  }
}
