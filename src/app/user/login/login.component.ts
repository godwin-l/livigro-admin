import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';
import {UserService} from '../user.service';


@Component({
  selector: 'app-forms',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;


  display='none'; 

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }

  public mobile='';
  public isLogged;
  public wrong = false;
  public isOTP = false;
  public userId;
  public otpmsg;
  public otpmsgStatus = false; 
  public modals: any[] = [];
  public mobilepopup = false;
  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();



  ngOnInit() {
    

  }

  showpopup(){
    if(this.isOTP== false && this.wrong == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}


  public verifyOTP(otp){
    
    this.apiService.verifyOTPadmin(otp,this.userService.getMobile()).subscribe((data:  any) => {
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
          this.router.navigate(['/in']);
        }
        else
        {
          this.otpmsgStatus=true;
          this.otpmsg = "Wrong OTP";
        }
        
      }
  });
  }

  public otpLogin(mobile)
  {
   this.apiService.otpLoginadmin(mobile).subscribe((data:  any) => {
      this.userService.setMobile(mobile);
      this.isOTP = true;
   });
  }

 closeModalDialog(){
  this.display='none'; 
  this.wrong = false;
  this.isOTP = false;
  this.otpmsgStatus=false;
  this.mobilepopup = false;
 }


 public otpbutton(){
  this.display='block';
  this.mobilepopup = true;
 }
  
public login(mobile,password){
  this.userService.setMobile(mobile);
  this.apiService.adminLogin(password,mobile).subscribe((data:  any) => {
    this.userService.setUserId(data.data.userId);
    
    this.mobile=this.userService.getMobile();
    if(this.userService.getUserId()){
      this.isLogged=true;
    }
    else this.isLogged=false;


    if(this.isLogged)
    {
    this.router.navigate(['/package']);
    }
    else
    {
      this.wrong = true;
      this.display='block';
    }
});
}



}
