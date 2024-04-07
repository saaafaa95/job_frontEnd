import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  addNewPost(Post: any){
    return this.http.post('https://localhost:8000/api/AddPost',Post);
  }
 
  update_post(post : any , id_post : any){
    return this.http.post('https://localhost:8000/update_post/'+id_post, post)
  }

  getPost(id_post : any){
    //9otlou jibli user bil id mel showuser
  return this.http.get('https://localhost:8000/show_post/'+id_post)
  }

  deletePost(id_post : any){
    return this.http.get('https://localhost:8000/deletePost/'+id_post)
  }

  getListPosts(id_recruteur : any){
  return this.http.get('https://localhost:8000/show_my_jobs/'+id_recruteur)
  }
}
