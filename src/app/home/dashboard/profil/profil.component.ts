import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements AfterViewInit {
  UserInfo : any;
  constructor(private auth:AuthService , private toastr: ToastrService , private routes:Router , private styleService: StyleService) {
    this.myProfil();
  }

  myProfil(){
    this.UserInfo = this.auth.getUserInfo();
    console.log(this.UserInfo)
  }

  ngAfterViewInit(): void {
    const windowHeight = window.innerHeight - 76;
    this.styleService.wrapperHeight(windowHeight);
  }


}
