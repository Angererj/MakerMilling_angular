import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MachineMainStateService} from "../service/machine-main-state.service";
import {MachineInformationService} from "../service/machine-information.service";
import {MachineStateService} from "../service/machine-state.service";
import {MachineActiveSessionService} from "../service/machine-active-session.service";
import {MachineCurrentToolService} from "../service/machine-current-tool.service";
import {UserService} from "../service/user.service";
import {MachineImagesService} from "../service/machine-images.service";
import {environment} from "../../environments/environments";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('canvas_Livecam', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  @ViewChild('stream', { static: true }) streamRef!: ElementRef<HTMLImageElement>;

  private animationFrameId: number | undefined;

  tankPressureInput= "";
  tankPressureOutput= "";
  machineTank1Empty= "";
  machineTank2= "";
  machineVacuum= "";
  runtimeCombined= "";
  machineState= "";
  machineRGBState= "";

  machineNumber= "";
  machineName= "";
  machineFloor= "";
  machineLocation= "";
  machineSoftwareVersion= "";

  notificationType= "";
  notificationMessage= "";

  activeProgramProgress= "";
  activeProgramTimeLeft= ""
  activeProgramTimeExecution = ""
  activeProgramName= ""
  activeProgramType= ""
  activeProgramDirectory= ""

  toolName= "";
  toolDescription= "";
  toolArticleNr= "";
  toolProperty= "";

  toolInSpindleImage = "";
  programPreviewImage = "";
  liveCameraImage = "";

  popupErrorMessage = "Maschine ist nicht erreichbar, stellen Sie sicher, dass diese eingeschaltet und mit dem Netzwerk verbunden ist.";

  constructor(public machineMainStateService: MachineMainStateService,
              private machineInformationService: MachineInformationService,
              private machineActiveSession: MachineActiveSessionService,
              private machineStateService: MachineStateService,
              private machineCurrentTool: MachineCurrentToolService,
              private userService: UserService,
              private imageService: MachineImagesService) {
  }

  ngOnInit() {
    this.machineMainStateService.getGlobalMachineIsActive();
    setInterval(() => this.machineMainStateService.getGlobalMachineIsActive(), 2000);
    setInterval(() => this.machineMainStateService.executeImageOneSecond(), 1000);


    //this.startStreaming();

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
      switch (value) {
        case "Init":
          value = 'Initialisieren';
          break;
        case "Preparing":
          value = 'Vorbereiten';
          break;
        case "Idle":
           value = 'Leerlauf'
          break;
        case "Running":
          value = 'Aktiv';
          break;
        case  "Manual":
          value = 'Handbetrieb';
          break;
        case "Aborted":
          value = 'Abgebrochen';
          break;
        case "Transient":
          value = 'Undefiniert';
          break;
        case "WaitingForUserInput":
          value = 'Warten auf Benutzereingabe';
          break;
      }
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

    this.imageService.toolInSpindleImage.subscribe(value => {
      this.toolInSpindleImage = value;
    })
    this.imageService.programPreviewImage.subscribe(value => {
      this.programPreviewImage = value;
    })
    this.imageService.liveCameraImage.subscribe(value => {
      this.liveCameraImage = value;
    })
  }

  /**
  startStreaming() {
    const img = this.streamRef.nativeElement;
    img.src = environment.machineVideoStream;
    img.onload = () => {
      this.drawImageOnCanvas();
      this.animateStreaming();
    };
  }



  stopStreaming() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  drawImageOnCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(this.streamRef.nativeElement, 10,10,400,277);
    }
  }

  animateStreaming() {
    this.animationFrameId = requestAnimationFrame(() => {
      this.drawImageOnCanvas();
      this.animateStreaming();
    });
  }

    **/
}
