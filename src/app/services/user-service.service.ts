import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  constructor(private http: HttpClient) { }

  getListUsers(){
    return this.http.get('http://localhost:8000/showUsers')
  }

  addNewUser(user: any){
    return this.http.post('http://localhost:8000/Adduser',user);
  }
 
  getUser(id_user : any){
      //9otlou jibli user bil id mel showuser
    return this.http.get('http://localhost:8000/showUser/'+id_user)
  }
  
  updateUser(user : any , id_user : any){
    return this.http.post('http://localhost:8000/update/'+id_user , user)
  }
  

}
