import {Component, OnInit} from '@angular/core';
import {DatatableService} from "../service/datatable.service";
import {UserService} from "../service/user.service";
import {setUserAuthenticated} from "../../environments/environments";
import {Router} from "@angular/router";
import {MachineMainStateService} from "../service/machine-main-state.service";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  isEmpty: any;
  dataEntry: any;
  fullname: string = "";

  constructor(private datatableService: DatatableService, private userService: UserService, private router: Router, private MainStateService: MachineMainStateService) {
  }

  logOut() {
    setUserAuthenticated(false)
    this.router.navigate(['/login']);

  }

  ngOnInit() {
    this.MainStateService.executeAllServices();
    this.fullname = this.userService.getFullname();
    setInterval(() => this.datatableService.getDatatable(), 30000);
    this.datatableService.getDatatable();
    this.datatableService.dataSubject.subscribe(data => {
      this.dataEntry = data.rows;
      this.dataEntry = this.dataEntry.filter((entry: { fullname: string; }) => entry.fullname === this.fullname);
      if (this.dataEntry.length == 0) {
        this.isEmpty = true
      } else {
        this.isEmpty = false
      }
      this.dataEntry = this.dataEntry.filter((entry: { fullname: string; }) => entry.fullname !== "");
    })
  }
}
