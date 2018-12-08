import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private mobile: string;
  private userId: String;
  private payment: String;
  constructor() { 
    this.mobile='';
    this.userId='';
    this.payment='';
  }
  public setMobile(number){
    this.mobile=number;
  }
  public getMobile(){
    return this.mobile;
  }
  public setUserId(id){
    this.userId=id;
  }
  public getUserId(){
    return this.userId;
  }



}

  