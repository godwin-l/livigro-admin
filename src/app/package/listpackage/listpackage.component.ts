import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../../api.service';
import {PackageService} from '../package.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listpackage',
  templateUrl: './listpackage.component.html',
  styleUrls: ['./listpackage.component.scss']
})
export class PackageComponent implements OnInit {

  public  packages;
  public loading = false;
  constructor(private  apiService:  ApiService, private router: Router, private packageService : PackageService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.listPackages();
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 1 second */
        this.spinner.hide();
    }, 1000);
}

public  listPackages(){
  this.loading = true;
  this.apiService.getPackages().subscribe((data:  any) => {
      this.loading = false;
      this.packages  =  data.data;
  });
}
public viewPackage(data){
  this.packageService.setPackageInfo(data);
  this.router.navigate(['/viewpackage']);
}

  

}
