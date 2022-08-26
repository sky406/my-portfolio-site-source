import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectservService {
  url = "https://portfoliodata-7k76v.ondigitalocean.app/api"
  imgurl ="https://portfoliodata-7k76v.ondigitalocean.app"

  constructor(private client:HttpClient) { }

  getprojects()
  {
    return this.client.get(`${this.url}/projects?populate=main_img,other_imgs,icon_img`)
  }

  getproject(id:number)
  {
    return this.client.get(`${this.url}/projects/${id}?populate=main_img,other_imgs,icon_img`)
  }
}
