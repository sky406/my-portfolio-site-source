import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectservService {
  url = "http://localhost:6969"

  constructor(private client:HttpClient) { }

  getprojects()
  {
    return this.client.get(`${this.url}/projects`)
  }

  getproject(id:number)
  {
    return this.client.get(`${this.url}/projects/${id}`)
  }
}
