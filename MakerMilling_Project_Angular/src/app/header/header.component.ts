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

  machineRGBState = "";

  constructor(private machineStateService: MachineStateService, private router: Router) {
  }

  logOut() {
    setUserAuthenticated(false);
    this.router.navigate(['/login']);
  }

  ngOnInit() {

    this.machineStateService.machineStatusLight.subscribe(value => {
      this.machineRGBState = value;
    })
  }

  protected readonly environment = environment;
}
