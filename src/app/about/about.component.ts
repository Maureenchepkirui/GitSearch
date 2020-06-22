import { Component, OnInit } from '@angular/core';
import {AboutService  } from "../about.service";
import {environment } from '../../environments/environment';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  profile:any;
   repos:any;
    constructor(private aboutService:AboutService) {
      this.aboutService.getProfileData().subscribe(profile =>{
        console.log(profile);
        this.profile = profile;
      });
      this.aboutService.getProfileRepos().subscribe(repos =>{
        console.log(repos);
        this.repos = repos;
      })
    }
       ngOnInit() {

        }
    }


// import { Component, OnInit } from '@angular/core';
// import {AboutService  } from "../about.service";
//
// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class AboutComponent implements OnInit {
// profile:any;
// repos:any;
//   constructor(private aboutService:AboutService) {
//     this.aboutService.getProfileData().subscribe(profile =>{
//       console.log(profile);
//       this.profile = profile;
//     });
//     this.aboutService.getProfileRepos().subscribe(repos =>{
//       console.log(repos);
//       this.repos = repos;
//     })
// }
//   ngOnInit() {
//
//     }
// }
