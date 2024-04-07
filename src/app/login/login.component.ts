import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  DataResponse :any 
 
  constructor(private auth:AuthService , private toastr: ToastrService , private routes:Router) {
  }


  login(f:any){ 
    let formdata = f.value 
    this.auth.login(formdata).subscribe((response) =>{ 
      //this.toastr.success("you are successfully logged in ", 'Welcome');
      this.DataResponse = response ;
      if(this.DataResponse.status != 200) {
        this.toastr.error(this.DataResponse.response, 'Error');
      }else{
        this.toastr.success(this.DataResponse.response, 'Welcome');
        //console.log(this.DataResponse.token);
        this.auth.SaveData(this.DataResponse.user)
        this.routes.navigate(['/']); 
      }
    })

    
  }
}
