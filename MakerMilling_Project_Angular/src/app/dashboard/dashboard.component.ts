import {Component, OnInit} from '@angular/core';
import {MachineMainStateService} from "../service/machine-main-state.service";
import {MachineInformationService} from "../service/machine-information.service";
import {MachineStateService} from "../service/machine-state.service";
import {MachineActiveSessionService} from "../service/machine-active-session.service";
import {MachineCurrentToolService} from "../service/machine-current-tool.service";
import {MachineImagesService} from "../service/machine-images.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //create variables for dashboard

  //machineState
  tankPressureInput = "";
  tankPressureOutput = "";
  machineTank1Empty = "";
  machineTank2 = "";
  machineVacuum = "";
  runtimeCombined = "";
  machineState = "";
  machineRGBState = "";
  notificationType = "";
  notificationMessage = "";

  //machineInformation
  machineNumber = "";
  machineName = "";
  machineFloor = "";
  machineLocation = "";
  machineSoftwareVersion = "";

  //activeProgram
  activeProgramProgress = "";
  activeProgramTimeLeft = ""
  activeProgramTimeExecution = ""
  activeProgramName = ""
  activeProgramType = ""
  activeProgramDirectory = ""

  //currentTool
  toolName = "";
  toolDescription = "";
  toolArticleNr = "";
  toolProperty = "";

  //machineImages
  toolInSpindleImage = "";
  programPreviewImage = "";
  liveCameraImage = "";

  //errorMessages Popup
  popupErrorMessage = "Maschine ist nicht erreichbar. Stellen Sie sicher, dass diese eingeschaltet und mit dem Netzwerk verbunden ist.";

  //import all services in constructor
  constructor(public machineMainStateService: MachineMainStateService,
              private machineInformationService: MachineInformationService,
              private machineActiveSession: MachineActiveSessionService,
              private machineStateService: MachineStateService,
              private machineCurrentTool: MachineCurrentToolService,
              private imageService: MachineImagesService) {
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=> {});
  }

  ngOnInit() {
    //check if machine is active
    this.machineMainStateService.getGlobalMachineIsActive();
    //delay 500 ms to wait for globalmachineisactive to be finished
    //if not information will not be displayed until page is changed
    this.delay(1000).then(any=>{
      //get machineinformations once on load
      this.machineMainStateService.getMachineInformationOnStartup();
    });

    //set interval to check if machine is active every 2 seconds
    setInterval(() => this.machineMainStateService.getGlobalMachineIsActive(), 2000);
    //set interval to load live camera image every 1 second
    setInterval(() => this.machineMainStateService.executeImageOneSecond(), 1000);

    //subscribe to subjects and pass to pre-defined variable - changed every time the subject gets different value
    //machineState
    this.machineStateService.tankPressureInput.subscribe(value => {
      this.tankPressureInput = value;
    });
    this.machineStateService.tankPressureOutput.subscribe(value => {
      this.tankPressureOutput = value;
    });
    this.machineStateService.machineTank1Empty.subscribe(value => {
      this.machineTank1Empty = value;
    });
    this.machineStateService.machineTank2.subscribe(value => {
      this.machineTank2 = value;
    });
    this.machineStateService.machineVacuumPressure.subscribe(value => {
      this.machineVacuum = value;
    });
    this.machineStateService.machineExecutionState.subscribe(value => {
      this.machineState = value;
    });
    this.machineStateService.machineStatusLight.subscribe(value => {
      this.machineRGBState = value;
    });
    this.machineStateService.lastNotificationType.subscribe(value => {
      this.notificationType = value;
    });
    this.machineStateService.lastNotificationMessage.subscribe(value => {
      this.notificationMessage = value;
    });
    this.machineStateService.machineRuntimeCombined.subscribe(value => {
      this.runtimeCombined = value;
    });

    //machineInformation
    this.machineInformationService.machineNumber.subscribe(value => {
      this.machineNumber = value;
    });
    this.machineInformationService.machineType.subscribe(value => {
      this.machineName = value;
    });
    this.machineInformationService.machineFloor.subscribe(value => {
      this.machineFloor = value;
    });
    this.machineInformationService.machineLocation.subscribe(value => {
      this.machineLocation = value;
    });
    this.machineInformationService.machineSoftwareVersion.subscribe(value => {
      this.machineSoftwareVersion = value;
    });

    //activeSession
    this.machineActiveSession.activeProgramName.subscribe(value => {
      this.activeProgramName = value;
    });
    this.machineActiveSession.activeProgramDirectory.subscribe(value => {
      this.activeProgramDirectory = value;
    });
    this.machineActiveSession.activeProgramType.subscribe(value => {
      this.activeProgramType = value;
    });
    this.machineActiveSession.activeProgramProgress.subscribe(value => {
      this.activeProgramProgress = value;
    });
    this.machineActiveSession.activeProgramExecutionTime.subscribe(value => {
      this.activeProgramTimeExecution = value;
    });
    this.machineActiveSession.activeProgramExecutionTimeLeft.subscribe(value => {
      this.activeProgramTimeLeft = value;
    });

    //currentTool
    this.machineCurrentTool.toolDescription.subscribe(value => {
      this.toolDescription = value;
    });
    this.machineCurrentTool.toolName.subscribe(value => {
      this.toolName = value;
    });
    this.machineCurrentTool.toolArticleNumber.subscribe(value => {
      this.toolArticleNr = value;
    });
    this.machineCurrentTool.toolDominatingProperty.subscribe(value => {
      this.toolProperty = value;
    });
    this.imageService.toolInSpindleImage.subscribe(value => {
      this.toolInSpindleImage = value;
    });

    //machineImages
    this.imageService.programPreviewImage.subscribe(value => {
      this.programPreviewImage = value;
    });
    this.imageService.liveCameraImage.subscribe(value => {
      if(value.trim() !== '' && value !== 'data:image/png;base64,'){
        this.liveCameraImage = value;
      }
    });
  }
}
