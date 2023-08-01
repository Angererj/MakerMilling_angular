import {Component, OnInit} from '@angular/core';
import {environment, setUserAuthenticated} from "../../environments/environments";
import {Router} from "@angular/router";
import {MachineStateService} from "../service/machine-state.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //create variable
  machineRGBState = "";

  //import router and machineState service
  constructor(private machineStateService: MachineStateService,
              private router: Router) {
  }

  //logout on button 'abmelden' clicked and userisathenticated false - navigate to login page
  logOut() {
    setUserAuthenticated(false);
    this.router.navigate(['/login']);
  }

  //oninit subscribe to subject
  ngOnInit() {
    this.machineStateService.machineStatusLight.subscribe(value => {
      this.machineRGBState = value;
    })
  }

  //implement environment with readonly
  protected readonly environment = environment;
}
