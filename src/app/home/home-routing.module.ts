import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ProfilComponent } from './dashboard/profil/profil.component';
import { AddPostComponent } from './dashboard/add-post/add-post.component';
import { MyJobListComponent } from './dashboard/my-job-list/my-job-list.component';
import { EditJobComponent } from './dashboard/edit-job/edit-job.component';


const routes: Routes = [
  { path: '', component: LayoutsComponent ,children:[
  { path: '', component: AcceuilComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'add_job', component: AddPostComponent },
  { path: 'my_job_list', component: MyJobListComponent },
  { path: 'edit_job/:id', component: EditJobComponent },
  
  ] },   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
