import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { PostServiceService } from '../../../services/post-service.service';
import { StyleService } from '../../../services/style.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrl: './edit-job.component.css'
})

export class EditJobComponent  implements AfterViewInit  {
  DataResponse: any;
  data :any ;
  formdata: any = {} ; 
  UserInfo : any ;
  jobId : any ;
  expirationDate :  any ;
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private post_service: PostServiceService,
    private styleService: StyleService,
    private toastr: ToastrService,
    private routes: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.UserInfo = this.auth.getUserInfo();
    this.route.params.subscribe((routeData) => {
      this.jobId = routeData['id'];
      this.getJobById(this.jobId);
    });
  }

  getJobById(id: any): void {
    this.post_service.getPost(id).subscribe((data: any) => {
      if (data.status == 200) {
        this.formdata = data.Post;
        this.expirationDate = this.Date_format(this.formdata.expirationDate)
      }
    });
  }
   ngAfterViewInit(): void {
     const windowHeight = window.innerHeight - 76;
     this.styleService.wrapperHeight(windowHeight);
   }

  

   
//7welna date string l object
  Date_format(date: string): string {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = ('0' + (dateObject.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
    const day = ('0' + dateObject.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

   update_form(f: NgForm){
    console.log(f.value)
    if (f.valid) {
      this.formdata = f.value ;
      this.data = {
        ...this.formdata,
        id_user:this.UserInfo.id
      }
      
      this.post_service.update_post(this.data , this.jobId).subscribe((data:any)=>{
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
