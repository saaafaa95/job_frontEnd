import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LeftMenuComponent } from './dashboard/left-menu/left-menu.component';
import { ProfilComponent } from './dashboard/profil/profil.component';
import { AddPostComponent } from './dashboard/add-post/add-post.component';
import { FormsModule }   from '@angular/forms';
import { MyJobListComponent } from './dashboard/my-job-list/my-job-list.component';
import { EditJobComponent } from './dashboard/edit-job/edit-job.component';
import { MatDialogModule }   from '@angular/material/dialog';
import { ModalComponent } from './dashboard/modal/modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AcceuilComponent, 
    LayoutsComponent,
    LeftMenuComponent,
    ProfilComponent,
    AddPostComponent,
    MyJobListComponent,
    EditJobComponent,
    ModalComponent
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class HomeModule { }
