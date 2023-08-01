import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MachineInformationService} from "./machine-information.service";
import {MachineStateService} from "./machine-state.service";
import {MachineActiveSessionService} from "./machine-active-session.service";
import {MachineCurrentToolService} from "./machine-current-tool.service";
import {environment} from "../../environments/environments";
import {MachineImagesService} from "./machine-images.service";

@Injectable({
  providedIn: 'root'
})
export class MachineMainStateService {
  //baseurl, appkey from environment
  private baseUrl: string = environment.baseUrl;
  private appKey: string = environment.appKey;

  //machine is active boolean
  private _globalMachineState: boolean = false;


  get globalMachineState(): boolean {
    //returns machinestate boolean
    return this._globalMachineState;
  }

  public executeAllServices() {
    //executes all services
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
    //images without livecamera, because camera is executed every 1 second
    this.machineImageService.getToolInSpindleImage();
    this.machineImageService.getProgramPreviewImage();
  }

  public executeImageOneSecond() {
    //execute if machineisactive and userisloggedin
    if (this._globalMachineState && environment.userIsAuthenticated){
      this.machineImageService.getLiveCameraFeed();
    }
  }

  public getMachineInformationOnStartup(){
    //get machineInfos on startup if machineisactive and user is logged in
    if (this._globalMachineState && environment.userIsAuthenticated){
      this.machineInformationService.getMachineType();
      this.machineInformationService.getMachineNumber();
      this.machineInformationService.getMachineSoftwareVersion();
      this.machineInformationService.getMachineRequiresTraining();
      this.machineInformationService.getMachineLocation();
      this.machineInformationService.getMachineFloor();
    }
  }

  //get httpclient, services
  constructor(private http: HttpClient,
              private machineInformationService: MachineInformationService,
              private machineStateService: MachineStateService,
              private machineActiveSessionService: MachineActiveSessionService,
              private machineCurrentToolService: MachineCurrentToolService,
              private machineImageService: MachineImagesService) {
  }

  //check if machine is active
  public getGlobalMachineIsActive() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMainStateMachine.Thing/Properties/globalMachineIsActive';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });

    this.http.get<any>(url, {'headers': headers}).subscribe(
      (result) => {
        this._globalMachineState = result.rows[0].globalMachineIsActive;
        //if machine is active execute all services
        if (this._globalMachineState && environment.userIsAuthenticated) {
          this.executeAllServices();
        } else {
          //console.log("Maschine ist nicht erreichbar.");
        }
      },
      (error) => {
        //console.error('Error occurred:', error);
      }
    );
  }
}
