import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  users$: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private userService:UserService, private apiService:ApiService,private router:Router,private http: HttpClient) { }

  ngOnInit() {
    this.mobile = this.userService.getMobile();
    this.userId = this.userService.getUserId();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.apiService.viewAllbooking().subscribe(data => {
      this.userBookings = data;
      console.log(this.userBookings);
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
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
