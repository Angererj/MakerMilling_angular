import {Component, OnInit} from '@angular/core';
import {DatatableService} from "../service/datatable.service";
import {UserService} from "../service/user.service";
import {SessionObject} from "../model/session";
import {DatePipe} from "@angular/common";
import {setUserAuthenticated} from "../../environments/enviroments";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit{
    dataTable: any[] =[]
   dataEntry:any;
  array1: any;
  fullname:string="";
  constructor(private datatableService: DatatableService, private userService: UserService,private router: Router) {
}
logOut(){
setUserAuthenticated(false)
  this.router.navigate(['/login']);

}

ngOnInit() {
     this.fullname = this.userService.getFullname();
  setInterval(() => this.datatableService.getDatatable(), 30000);
  this.datatableService.getDatatable();
      this.datatableService.dataSubject.subscribe(data=>{
        this.dataEntry = data.rows;
        console.log(this.dataEntry)
        // @ts-ignore
        this.dataEntry = this.dataEntry.filter(entry => entry.fullname === this.fullname);
        // @ts-ignore
        this.dataEntry = this.dataEntry.filter(entry => entry.fullname !== "");
      })
}
}
