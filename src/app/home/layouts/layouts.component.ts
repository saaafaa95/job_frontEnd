import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

  isUserLoggedIn : any = false ;
  isActive : any = false ; 
  userName : any ;
  Role : any ;
  constructor(private auth:AuthService , private routes:Router) {
    this.isUserLoggedIn = this.auth.isLogginIn() ;
    if(this.isUserLoggedIn){
      //console.log(this.auth.getUserInfo())
      this.userName = this.auth.getUserInfo().userIdentifier
      this.Role = this.auth.getUserInfo().role
    }
  }

  isExcludedRoute(): boolean {
    const currentRoute = this.routes.url;
    return currentRoute.includes('/profil') || currentRoute.includes('/my_job_list') || currentRoute.includes('/edit_job') || currentRoute.includes('/add_post');
  }
 
  Connecter(){
    this.routes.navigate(['/login']); 
  }

  addActiveClass(){
    if(this.isActive) this.isActive = false ;
    else this.isActive = true ;
  }

  Logout(){
    this.auth.RemoveData() ;
    this.Connecter() ;
  }
}
