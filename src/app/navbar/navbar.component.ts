import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../user/user.service';
import {Router}  from  '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  public mobile='';
  public isLogged;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig,private userService: UserService, private router:Router ) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {

  this.mobile=this.userService.getMobile();
  if(this.userService.getUserId()){
    this.isLogged=true;
  }
  else this.isLogged=false;

  }

public logout(){
  this.userService.setUserId('');
  this.router.navigate(['/login']);
}

}
