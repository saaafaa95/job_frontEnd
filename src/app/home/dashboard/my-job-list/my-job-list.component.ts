import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { StyleService } from '../../../services/style.service';
import { PostServiceService } from '../../../services/post-service.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-job-list',
  templateUrl: './my-job-list.component.html',
  styleUrl: './my-job-list.component.css'
})
export class MyJobListComponent implements AfterViewInit {
  UserInfo : any;
  job_list : any ;
  DataResponse : any ; 
  constructor(private dialog: MatDialog ,private auth:AuthService , private post_service:PostServiceService , private toastr: ToastrService , private routes:Router , private styleService: StyleService) {
    this.myProfil();
    this.getJobList();
    
  }

  myProfil(){
    this.UserInfo = this.auth.getUserInfo();
  }

  Date_format(date : any){
    const dateObject = new Date(date);
    return  this.formatDate(dateObject);
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  getJobList(){
    this.post_service.getListPosts(this.UserInfo.id).subscribe((response) =>{ 
      this.DataResponse = response ;
      if(this.DataResponse.status == 200) {
        this.job_list = this.DataResponse.jobs ;
      }
    })
  }
  
  
  ngAfterViewInit(): void {
    const windowHeight = window.innerHeight - 76;
    this.styleService.wrapperHeight(windowHeight);
  }

  delete_job(id : any){
    this.post_service.deletePost(id).subscribe((responseBack :any) =>{ 
      if(responseBack.status == 200) {
        this.toastr.success(responseBack.response, 'Succes');
        this.getJobList();
      }
    })
  }

  confirmDelete(id :any) : void {
    const dialogRef = this.dialog.open(ModalComponent,{
      height: '200px',
      width: '400px',
      
      data:{
        message: 'Are you sure want to delete?',
        idJob : id,
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    

    dialogRef.afterClosed().subscribe((idJob: any) => {
      if (idJob) {
        this.delete_job(idJob)
      }
    });
  }

}
