import { Injectable } from '@angular/core';
import {User  } from "./user";
import { HttpClient } from "@angular/common/http";

import { map } from 'rxjs/operators';

@Injectable({

  providedIn: 'root'
})
export class ProfileService {
user : User
private userName:string;
constructor(private http: HttpClient) {
console.log("works")
this.userName = 'Maureenchepkirui'
   }
getProfileData(){
  return this.http.get("https://api.github.com/users/"+this.userName)
  .pipe(map(res => res));
}
}
