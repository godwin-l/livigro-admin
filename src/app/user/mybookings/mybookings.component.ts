import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.scss']
})
export class MybookingsComponent implements OnInit {


  public userId;
  public mobile;
  public userBookings;
  public packid;
  public packageDetail;

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }

  ngOnInit() {
    this.viewbook();
  }

  public viewbook()
    {
      this.mobile = this.userService.getMobile();
      this.userId = this.userService.getUserId();
      
      this.apiService.viewAllbooking().subscribe((data:  any) => {
          this.userBookings = data.data;      
      });
}



}
