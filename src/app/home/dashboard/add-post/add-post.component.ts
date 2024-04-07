import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { StyleService } from '../../../services/style.service';
import { NgForm } from '@angular/forms';
import { PostServiceService } from '../../../services/post-service.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements AfterViewInit  {
  DataResponse: any;
  data :any ;
  formdata : any ;
  UserInfo : any ; 
  constructor(private auth:AuthService , private post_service:PostServiceService , private styleService: StyleService , private toastr: ToastrService , private routes:Router , private elementRef: ElementRef) {
   this.UserInfo = auth.getUserInfo();
  }
  ngAfterViewInit(): void {
    const windowHeight = window.innerHeight - 76;
    this.styleService.wrapperHeight(windowHeight);
  }
  
  add_post(f: NgForm) {
    if (f.valid) {
      this.formdata = f.value ;
      
      this.data = {
        ...this.formdata,
        id_user:this.UserInfo.id
      }
      
      this.post_service.addNewPost(this.data).subscribe((data:any)=>{
        this.DataResponse = data ;
        if(this.DataResponse.status != 200) {
          this.toastr.error(this.DataResponse.response, 'Error');
        }else{
          this.toastr.success(this.DataResponse.response, 'Succes');
          this.routes.navigate(['/my_job_list']); 
        }
      
      });
            
      }
}

}
