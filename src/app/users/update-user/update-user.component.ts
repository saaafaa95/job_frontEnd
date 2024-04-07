import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  User: any;
  UserId: any 

  constructor(private userService:UserServiceService , private route:ActivatedRoute ) {
    this.route.params.subscribe((data)=>{
     
      this.UserId = data['id']  // data['id'] = 3;
    })
  }
   ngOnInit(): void { 
    this.getUser()
  }
  updateUser(){
    this.userService.updateUser(this.User,this.UserId).subscribe((data:any)=>{
        console.log(data)
      })
  }
  getUser() {
    this.userService.getUser(this.UserId).subscribe((data:any)=>{
      this.User = data.user;
      })

  }

}