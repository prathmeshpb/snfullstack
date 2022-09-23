import { Component, OnInit } from '@angular/core';
import { DeptserviceService } from '../deptservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {
 // userdata = ['admin','manager','qa']
  
 userdata 
 deptdata
  
 constructor(private us:UserserviceService, private ds:DeptserviceService) { 
 
  this.userdata = this.us.userdata()
  this.deptdata = this.ds.deptdata()
}

  ngOnInit(): void {
  }

}
