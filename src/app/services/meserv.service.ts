import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aboutme } from '../interfaces/aboutme';

@Injectable({
  providedIn: 'root'
})
export class MeservService {
  url = "http://localhost:6969/api/about-me?populate=photo"
  linksurl = "/api/social-links?populate=icon"
  skillurl = "/api/skills?populate=icon"
  schoolurl = "/api/educations?populate=img"
  workedurl = "/api/worked-withs?populate=logo"
  imurl = "http://localhost:6969"

  constructor(private client:HttpClient) {}

  get()
  {
    return this.client.get(this.url)
  }
  get_links()
  {
    return this.client.get(this.imurl+this.linksurl)
  }
  get_prof()
  {
    return this.client.get(this.imurl+this.skillurl)
  }
  get_school()
  {
    return this.client.get(this.imurl+this.schoolurl)
  }
  get_worked()
  {
    return this.client.get(this.imurl+this.workedurl)
  }
}
