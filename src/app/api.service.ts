import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
API_URL  =  window.location.origin;

constructor(private  http:  HttpClient) { }

getPackages(){
    return  this.http.get(`${this.API_URL}/api/package/listpackages`);
}

getTopPackages(){
  return  this.http.get(`${this.API_URL}/api/package/listtoppackages`);
}

createPackage(data){
  return  this.http.post(`${this.API_URL}/api/package/`,data);
}

searchPackage(data){
  return  this.http.post(`${this.API_URL}/api/package/searchpackage`,{'term': data });
}

searchPackageId(data){
  return  this.http.post(`${this.API_URL}/api/package/searchpackageid`,{'term': data });
}

register(mobile){
  return  this.http.post(`${this.API_URL}/api/user/register`,{'mobile':mobile});
}
verifyOTP(otp,mobile){
  return  this.http.post(`${this.API_URL}/api/user/verifyOtp`,{'otp':otp,'mobile':mobile});
}

verifyOTPadmin(otp,mobile){
  return  this.http.post(`${this.API_URL}/api/admin/verifyOtp`,{'otp':otp,'mobile':mobile});
}
registerUser(password,mobile){
  return  this.http.post(`${this.API_URL}/api/user/registeruser`,{'password':password,'mobile':mobile});
}

login(password,mobile){
  return  this.http.post(`${this.API_URL}/api/user/login`,{'password':password,'mobile':mobile});
}

adminLogin(password,mobile){
  return  this.http.post(`${this.API_URL}/api/admin/login`,{'password':password,'mobile':mobile});
}

editProfile(mobile,name,gender,dob,email,city,door,street,postcode,password){
  return  this.http.post(`${this.API_URL}/api/user/editprofile`,{'mobile':mobile,'name':name,'gender':gender,'dob':dob,'email':email,'city':city,'door':door,'street':street,'postcode':postcode,'password':password});
}

viewProfile(mobile){
  return  this.http.post(`${this.API_URL}/api/user/viewprofile`,{'mobile':mobile});
}

otpLogin(mobile){
  return  this.http.post(`${this.API_URL}/api/user/otplogin`,{'mobile':mobile});
}

otpLoginadmin(mobile){
  return  this.http.post(`${this.API_URL}/api/admin/otplogin`,{'mobile':mobile});
}

viewBooking(userId){
  return  this.http.post(`${this.API_URL}/api/booking/viewbooking`,{'userId':userId});
}

viewAllbooking(){
  return  this.http.get(`${this.API_URL}/api/booking/viewallbooking`);
}

bookPackage(userId,packageId,name,mobile,address){
  return  this.http.post(`${this.API_URL}/api/booking/bookpackage`,{'userId':userId,'packageId':packageId,'name':name,'mobile':mobile,'address':address});
}

}