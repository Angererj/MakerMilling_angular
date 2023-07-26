import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime} from "rxjs";
import {MachineInformationService} from "./machine-information.service";
import {MachineStateService} from "./machine-state.service";
import {MachineActiveSessionService} from "./machine-active-session.service";
import {MachineCurrentToolService} from "./machine-current-tool.service";
import {AppComponent} from "../app.component";
import {environment} from "../../environments/enviroments";
import {MachineImagesService} from "./machine-images.service";

@Injectable({
  providedIn: 'root'
})
export class MachineMainStateService {

  private baseUrl: string = environment.baseUrl;

  private appKey:string = environment.appKey;

  private globalMachineState: boolean = false;
  public  executeAllServices(){
    this.machineInformationService.getMachineType();
    this.machineInformationService.getMachineNumber();
    this.machineInformationService.getMachineSoftwareVersion();
    this.machineInformationService.getMachineRequiresTraining();
    this.machineInformationService.getMachineLocation();
    this.machineInformationService.getMachineFloor();
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
    this.machineActiveSessionService.getLoggedInSince();
    this.machineActiveSessionService.getLoggedInUserName();
    this.machineActiveSessionService.getMachineActivatedProgramName();
    this.machineActiveSessionService.getMachineActivatedProgramDirectory();
    this.machineActiveSessionService.getMachineActivatedProgramType();
    this.machineActiveSessionService.getMachineActivatedProgramExecutionTime();
    this.machineActiveSessionService.getMachineActivatedProgramExecutionTimeLeft();
    this.machineActiveSessionService.getMachineActivatedProgramProgress();
    this.machineActiveSessionService.getMachineActivatedProgramPreviewImage();
    this.machineCurrentToolService.getToolName();
    this.machineCurrentToolService.getToolDescription();
    this.machineCurrentToolService.getToolArticleNumber();
    this.machineCurrentToolService.getToolDominatingProperty();
    this.machineCurrentToolService.getToolImageUrl();
    this.machineImageService.getToolInSpindleImage();
    this.machineImageService.getProgramPreviewImage();
    //this.machineImageService.getLiveCameraFeed();
  }



  constructor(private http: HttpClient,
              private machineInformationService: MachineInformationService,
              private machineStateService: MachineStateService,
              private machineActiveSessionService: MachineActiveSessionService,
              private machineCurrentToolService: MachineCurrentToolService,
              private machineImageService: MachineImagesService){ }


  public getGlobalMachineIsActive() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMainStateMachine.Thing/Properties/globalMachineIsActive';
    const headers= new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'});

    this.http.get<any>(url, { 'headers': headers }).subscribe(
      (result) => {
        this.globalMachineState = result.rows[0].globalMachineIsActive;
        if( this.globalMachineState == true){
          this.executeAllServices();
        }
        else{
          console.log("Maschine ist nicht erreichbar");
        }
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }




}
