import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit{
  //ay haja bech tajouteha bech ykoun role mta3ha user 
  userData: any = {"role":"user"}; 
  
  constructor(private userService:UserServiceService ) {}
  ngOnInit(): void {
  }

  addUser() {
    this.userService.addNewUser(this.userData).subscribe((response)=>{
      console.log(response);
    })
    //console.log(this.userData) ;

  }
}
