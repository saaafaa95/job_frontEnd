import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  DataResponse :any 
  constructor(private auth:AuthService , private toastr: ToastrService , private routes:Router) {
  }
candidateSelected: boolean = true;
recruiterSelected: boolean = false;
data : any  ;
type : any ;
Candidate() {
  this.candidateSelected = true ;
  this.recruiterSelected = false ;
}
Recruiter() {
  this.recruiterSelected = true ;
  this.candidateSelected = false ;
}

register(form: NgForm) {
  let formdata = form.value 
  
  if (form.valid && formdata.password == formdata.password_repeat) {
    
    if(this.candidateSelected) this.type = "candidate" ;
    else this.type = "recruiter" ;
    this.data = {
      ...formdata,
      type:this.type
    }
    this.auth.register(this.data).subscribe((response) =>{ 
      this.DataResponse = response ;
      if(this.DataResponse.status != 200) {
        this.toastr.error(this.DataResponse.response, 'Error');
      }else{
        this.toastr.success(this.DataResponse.response, 'Register');
        this.routes.navigate(['/login']); 
      }
    })
  }
  
  //
}

  
}
