import { Component, OnInit } from '@angular/core';
import {ProfileService  } from "../profile.service";
import {environment } from '../../environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any;
repos:any;
userName:string;

  constructor(private profileService:ProfileService) {

}

findprofile(){
  this.profileService.updateProfile(this.userName);
  this.profileService.getProfileData().subscribe(profile =>{
    console.log(profile);
    this.profile = profile;
  });
  this.profileService.getProfileRepos().subscribe(repos =>{
    console.log(repos);
    this.repos = repos;
  })
}
  ngOnInit() {

    }
}
