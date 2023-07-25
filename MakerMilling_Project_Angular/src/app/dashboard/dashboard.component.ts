import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {MachineMainStateService} from "../service/machine-main-state.service";
import {MachineInformationService} from "../service/machine-information.service";
import {MachineStateService} from "../service/machine-state.service";
import {MachineActiveSessionService} from "../service/machine-active-session.service";
import {MachineCurrentToolService} from "../service/machine-current-tool.service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tankPressureInput = "";
  tankPressureOutput = "";
  machineTank1Empty = "";
  machineTank2 = "";
  machineVacuum="";
  runtimeCombined="";
  machineState="";
  machineRGBState="";

  machineNumber="";
  machineName ="";
  machineFloor ="";
  machineLocation="";
  machineSoftwareVersion="";

  notificationType ="";
  notificationMessage="";

  activeProgramProgress ="";
  activeProgramTimeLeft =""
  activeProgramTimeExecution =""
  activeProgramName =""
  activeProgramType =""
  activeProgramDirectory =""

  toolName="";
  toolDescription="";
  toolArticleNr="";
  toolProperty="";
  constructor(private machineMainStateService: MachineMainStateService,
              private machineInformationService: MachineInformationService,
              private machineActiveSession: MachineActiveSessionService,
              private machineStateService: MachineStateService,
              private machineCurrentTool: MachineCurrentToolService,
              private userService: UserService) {
  }

  ngOnInit() {
    console.log(this.userService.getFullname())
    setInterval(() => this.machineMainStateService.getGlobalMachineIsActive(), 2000);


    this.machineStateService.tankPressureInput.subscribe(value => {
      this.tankPressureInput = value;
    })
    this.machineStateService.tankPressureOutput.subscribe(value => {
      this.tankPressureOutput = value;
    })
    this.machineStateService.machineTank1Empty.subscribe(value => {
      this.machineTank1Empty = value;
    })
    this.machineStateService.machineTank2.subscribe(value => {
      this.machineTank2 = value;
    })
    this.machineStateService.machineVacuumPressure.subscribe(value => {
      this.machineVacuum = value;
    })
    this.machineStateService.machineExecutionState.subscribe(value => {
      this.machineState = value;
    })
    this.machineStateService.machineStatusLight.subscribe(value => {
      this.machineRGBState = value;
    })



    this.machineInformationService.machineNumber.subscribe(value => {
      this.machineNumber = value;
    })
    this.machineInformationService.machineType.subscribe(value => {
      this.machineName = value;
    })
    this.machineInformationService.machineFloor.subscribe(value => {
      this.machineFloor = value;
    })
    this.machineInformationService.machineLocation.subscribe(value => {
      this.machineLocation = value;
    })
    this.machineInformationService.machineSoftwareVersion.subscribe(value => {
      this.machineSoftwareVersion = value;
    })


    this.machineStateService.lastNotificationType.subscribe(value => {
      this.notificationType = value;
    })

    this.machineStateService.lastNotificationMessage.subscribe(value => {
      this.notificationMessage = value;
    })

    this.machineStateService.machineRuntimeCombined.subscribe(value => {
      this.runtimeCombined = value;
    })


  this.machineActiveSession.activeProgramName.subscribe(value => {
    this.activeProgramName= value;
  })
  this.machineActiveSession.activeProgramDirectory.subscribe(value=>{
        this.activeProgramDirectory = value;
    })
    this.machineActiveSession.activeProgramType.subscribe(value =>{
      this.activeProgramType = value;
    })
    this.machineActiveSession.activeProgramProgess.subscribe(value =>{
      this.activeProgramProgress = value;
    })
    this.machineActiveSession.activeProgramExecutionTime.subscribe(value => {
      this.activeProgramTimeExecution = value;
    })
    this.machineActiveSession.activeProgramExecutionTimeLeft.subscribe(value => {
      this.activeProgramTimeLeft = value;
    })


    this.machineCurrentTool.toolDescription.subscribe(value => {
      this.toolDescription = value;
    })
    this.machineCurrentTool.toolName.subscribe(value => {
      this.toolName = value;
    })
    this.machineCurrentTool.toolArticleNumber.subscribe(value => {
      this.toolArticleNr = value;
    })
    this.machineCurrentTool.toolDominatingProperty.subscribe(value => {
      this.toolProperty = value;
    })
  }
}
