import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MachineMainStateService} from "./machine-main-state.service";
import {debounceTime} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MachineActiveSessionService {

  private baseUrl:string;
  private appKey:string;

  constructor(private http: HttpClient, private machineMainStateService: MachineMainStateService) {
    this.baseUrl = this.machineMainStateService.baseUrl;
    this.appKey = this.machineMainStateService.appKey;
  }

  public getLoggedInSince(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/loggedInSince';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].loggedInSince)
        return result.rows[0].loggedInSince;
      });
    }
  }

  public getLoggedInUserName(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/loggedInUserName';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].loggedInUserName)
        return result.rows[0].loggedInUserName;
      });
    }
  }

  public getMachineActivatedProgramName(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramName';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineActivatedProgramName)
        return result.rows[0].machineActivatedProgramName;
      });
    }
  }

  public getMachineActivatedProgramDirectory(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramDirectory';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineActivatedProgramDirectory)
        return result.rows[0].machineActivatedProgramDirectory;
      });
    }
  }
  public getMachineActivatedProgramExecutionTime(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramExecutionTime';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineActivatedProgramExecutionTime)
        return result.rows[0].machineActivatedProgramExecutionTime;
      });
    }
  }

  public getMachineActivatedProgramExecutionTimeLeft(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramExecutionLeftTime';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineActivatedProgramExecutionLeftTime)
        return result.rows[0].machineActivatedProgramExecutionLeftTime;
      });
    }
  }

  public getMachineActivatedProgramPreviewImage(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramPreviewImage';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineActivatedProgramPreviewImage)
        return result.rows[0].machineActivatedProgramPreviewImage;
      });
    }
  }

  public getMachineActivatedProgramProgress(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramProgressRounded';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineActivatedProgramProgressRounded)
        return result.rows[0].machineActivatedProgramProgressRounded;
      });
    }
  }

  public getMachineActivatedProgramType(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramType';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineActivatedProgramType)
        return result.rows[0].machineActivatedProgramType;
      });
    }
  }
}
