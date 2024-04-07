import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-one-user',
  templateUrl: './get-one-user.component.html',
  styleUrl: './get-one-user.component.css'
})
export class GetOneUserComponent implements OnInit  {
  //user yet3aba we9teli yemchi yecherchi 3al id
  User: any
  UserId: any 
  constructor(private userService:UserServiceService , private route:ActivatedRoute ) {
    // tjib il id mil route ya23ni kan route mta3i /showuser/3  besh tjib 3 
    this.route.params.subscribe((data)=>{ 
            //yab3ath param esmha data w y7otha f userId w bil id njmou njibou user 
      this.UserId = data['id'] ;
    })
  }
   ngOnInit(): void {   
    this.GetOneUser() 
  }
  GetOneUser() {//t3es 3a donne ali jaya mel k yousel t7tohm f data
    this.userService.getUser(this.UserId).subscribe((data:any)=>{
      //console.log(data) ;
      this.User = data.user;
      })

  }

}