import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  API_URL  =  window.location.origin;

  constructor(private httpService: HttpClient) { }
  private packageInfo;
  private packageList;
  public setPackageInfo(data)
  {
    this.packageInfo=data;
  }
  public getPackageInfo(){
    return this.packageInfo;
  }
  public setPackageList(data)
  {
    this.packageList=data;
  }
  public getPackageList(){
    return this.packageList;
  } 
}