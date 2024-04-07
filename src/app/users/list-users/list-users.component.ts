 import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {

  Users : any;
  
  constructor(private userService:UserServiceService ) {}
  ngOnInit(): void {
    //sna3na methode getallusers bech njibou la liste de user 
    this.getallUsers();
  }
  getallUsers(){
    this.userService.getListUsers().subscribe((data:any)=>{
       //sna3na user 7atina fih data.user ali jana mel backend 
      this.Users = data.users;
    })
  } 
  

}
