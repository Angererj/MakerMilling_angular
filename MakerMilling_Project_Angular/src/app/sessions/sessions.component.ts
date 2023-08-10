import {Component, OnInit} from '@angular/core';
import {DatatableService} from "../service/datatable.service";
import {UserService} from "../service/user.service";
import {MachineMainStateService} from "../service/machine-main-state.service";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  //declare variables
  sessionsIsEmpty: any;
  sessionDataEntry: any;
  fullName: string = "";

  //get router and services in constructor
  constructor(private datatableService: DatatableService,
              private userService: UserService,
              private MainStateService: MachineMainStateService) {
  }


  //on init execute services, get fullname, set interval to get datatable every 30 seconds
  ngOnInit() {
    this.MainStateService.executeAllServices();
    this.fullName = this.userService.getFullname();
    setInterval(() => this.datatableService.getDatatable(), 30000);
    //execute getdatatable, subscribe to subject, return dataentry and isEmpty
    this.datatableService.getDatatable();
    this.datatableService.dataSubject.subscribe(data => {
      this.sessionDataEntry = data;
      this.sessionDataEntry = this.sessionDataEntry.filter((entry: { fullname: string; }) => entry.fullname === this.fullName);
      this.sessionsIsEmpty = this.sessionDataEntry.length == 0;
      this.sessionDataEntry = this.sessionDataEntry.filter((entry: { fullname: string; }) => entry.fullname !== "");
    })
  }
}
