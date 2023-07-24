import {Component, OnInit} from '@angular/core';
import {MachineMainStateService} from "../machine-main-state.service";
import {MachineInformationService} from "../machine-information.service";
import {MachineStateService} from "../machine-state.service";
import {MachineActiveSessionService} from "../machine-active-session.service";
import {MachineCurrentToolService} from "../machine-current-tool.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private machineMainStateService: MachineMainStateService,
              private machineInformationService: MachineInformationService,
              private machineStateService: MachineStateService,
              private machineActiveSessionService: MachineActiveSessionService,
              private machineCurrentToolService: MachineCurrentToolService) {}

  private testfunctionInformations(){
    this.machineInformationService.getMachineType();
    this.machineInformationService.getMachineNumber();
    this.machineInformationService.getMachineSoftwareVersion();
    this.machineInformationService.getMachineRequiresTraining();
    this.machineInformationService.getMachineLocation();
    this.machineInformationService.getMachineFloor();
  }

  private testFunctionState(){
    this.machineStateService.getFabmanIsActive();
    this.machineStateService.getRuntimeCombined();
    this.machineStateService.getLastNotificationMessage();
    this.machineStateService.getLastNotificationType();
    this.machineStateService.getLiveFeedImageUrl();
    this.machineStateService.getMachineIsActive();
    this.machineStateService.getSpraySystemTank1Empty();
    this.machineStateService.getSpraySystemTank2();
    this.machineStateService.getMachineExecutionState();
    this.machineStateService.getMachineStatusLight();
    this.machineStateService.getMachineTankPressureInput();
    this.machineStateService.getMachineTankPressureOutput();
    this.machineStateService.getMachineVacuumIsActivated();
    this.machineStateService.getMachineVacuumPressure();
  }

  private testFunctionActiveSession(){
    this.machineActiveSessionService.getLoggedInSince();
    this.machineActiveSessionService.getLoggedInUserName();
    this.machineActiveSessionService.getMachineActivatedProgramName();
    this.machineActiveSessionService.getMachineActivatedProgramDirectory();
    this.machineActiveSessionService.getMachineActivatedProgramType();
    this.machineActiveSessionService.getMachineActivatedProgramExecutionTime();
    this.machineActiveSessionService.getMachineActivatedProgramExecutionTimeLeft();
    this.machineActiveSessionService.getMachineActivatedProgramProgress();
    this.machineActiveSessionService.getMachineActivatedProgramPreviewImage();
  }

  private testFunctionCurrentTool(){
    this.machineCurrentToolService.getToolName();
    this.machineCurrentToolService.getToolDescription();
    this.machineCurrentToolService.getToolArticleNumber();
    this.machineCurrentToolService.getToolDominatingProperty();
    this.machineCurrentToolService.getToolImageUrl();
  }

  ngOnInit() {
    this.machineMainStateService.ngOnInit();
  }
}
