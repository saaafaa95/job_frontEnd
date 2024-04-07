import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt' ;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService()
  constructor(private http: HttpClient) { }

//yab3ath data lel backend w backend 4adi ya3l traitemt mta3ou w yraja3lou donne 
  login(credentials: any) {
    return this.http.post('https://localhost:8000/api/login', credentials);
  }

  register(data : any){
    return this.http.post('https://localhost:8000/api/register', data);
  }
  
 

  SaveData(user: any ){
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('LogginIn',"true");
  }


  isLogginIn(){
    let LogginIn :any = localStorage.getItem('LogginIn') ;
    if (LogginIn == "true"){
        return true ;
    }else{
        return false ; 
    }
  }

  RemoveData(){
    localStorage.removeItem('LogginIn')
    localStorage.removeItem('user')
  }

  getUserInfo(){
    let user :any = localStorage.getItem('user') ;
    if(user!=null){
      return JSON.parse(user) 
    }else{
      return "false" 
    }
  }

}
