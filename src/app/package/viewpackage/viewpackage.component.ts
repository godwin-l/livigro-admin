import { Component, OnInit } from '@angular/core';
import {PackageService} from '../package.service';

import { Router } from '@angular/router';
import {UserService} from '../../user/user.service';
import  {ApiService} from '../../api.service';

@Component({
  selector: 'app-viewpackage',
  templateUrl: './viewpackage.component.html',
  styleUrls: ['./viewpackage.component.scss']
})
export class ViewpackageComponent implements OnInit {

  public packageInfo;
  public mobile='';
  public isLogged;
  public isOTP = false;
  public userId;
  public otpmsg;
  public otpmsgStatus = false; 

  constructor(private packageService: PackageService, private router: Router , private userService:UserService,private apiService:ApiService ) { }

  display='none'; 

  ngOnInit() {
   this.packageInfo=this.packageService.getPackageInfo();
  }

  closeModalDialog(){
    this.display='none';
    this.isOTP = false;
    this.otpmsgStatus=false;
   }


   public otpLogin(mobile)
   {
    this.apiService.otpLogin(mobile).subscribe((data:  any) => {
       this.userService.setMobile(mobile);
       this.isOTP = true;
    });
   }

   public verifyOTP(otp,value){
    
    this.apiService.verifyOTP(otp,this.userService.getMobile()).subscribe((data:  any) => {
      if( data.status != 'success')
      {
        this.otpmsgStatus=true;
        this.otpmsg = "Wrong OTP";   
      }
      else
      {
        this.userService.setUserId(data.data.userId);
        this.userId = this.userService.getUserId();
        console.log(this.userId);
        this.mobile=this.userService.getMobile();
        if(this.userService.getUserId()){
          this.isLogged=true;
        }
        else this.isLogged=false;


        if(this.isLogged)
        {
          this.packageService.setPackageInfo(value);
          this.router.navigate(['/payment']);
        }
        else
        {
          this.otpmsgStatus=true;
          this.otpmsg = "Wrong OTP";
        }
        
      }
  });
  }

  public bookPackage(data){
    this.mobile=this.userService.getMobile();
    if(this.userService.getUserId()){
      this.isLogged=true;
    }
    else this.isLogged=false;


    if(this.isLogged)
    {
      this.packageService.setPackageInfo(data);
      this.router.navigate(['/payment']);
    }
    else
   {
    this.display='block';
   }

  }

}
