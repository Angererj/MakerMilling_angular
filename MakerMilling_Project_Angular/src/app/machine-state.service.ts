import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MachineMainStateService} from "./machine-main-state.service";
import {debounceTime} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MachineStateService {

  private baseUrl:string;
  private appKey:string;

  constructor(private http: HttpClient, private machineMainStateService: MachineMainStateService) {
    this.baseUrl = this.machineMainStateService.baseUrl;
    this.appKey = this.machineMainStateService.appKey;
  }

  public getFabmanIsActive(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/fabmanIsActive';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].fabmanIsActive)
        return result.rows[0].fabmanIsActive;
      });
    }
  }

  public getRuntimeCombined(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/formattedRuntimeCombined';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].formattedRuntimeCombined)
        return result.rows[0].formattedRuntimeCombined;
      });
    }
  }

  public getLastNotificationMessage(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/latestNotificationMessage';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].latestNotificationMessage)
        return result.rows[0].latestNotificationMessage;
      });
    }
  }

  public getLastNotificationType(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/latestNotificationType';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].latestNotificationType)
        return result.rows[0].latestNotificationType;
      });
    }
  }

  public getLiveFeedImageUrl(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/liveFeedImageUrl';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].liveFeedImageUrl)
        return result.rows[0].liveFeedImageUrl;
      });
    }
  }

  public getMachineIsActive(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineIsActive';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineIsActive)
        return result.rows[0].machineIsActive;
      });
    }
  }

  public getSpraySystemTank1Empty(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineSpraysystemTank1Empty';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineSpraysystemTank1Empty)
        return result.rows[0].machineSpraysystemTank1Empty;
      });
    }
  }

  public getSpraySystemTank2(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineSpraySystemTank2';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineSpraySystemTank2)
        return result.rows[0].machineSpraySystemTank2;
      });
    }
  }

  public getMachineExecutionState(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineState';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineState)
        return result.rows[0].machineState;
      });
    }
  }

  public getMachineStatusLight(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/rgbStringVuforia';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].rgbStringVuforia)
        return result.rows[0].rgbStringVuforia;
      });
    }
  }

  public getMachineTankPressureInput(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineTankPressureInput';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineTankPressureInput)
        return result.rows[0].machineTankPressureInput;
      });
    }
  }

  public getMachineTankPressureOutput(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineTankPressureOutput';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineTankPressureOutput)
        return result.rows[0].machineTankPressureOutput;
      });
    }
  }

  public getMachineVacuumIsActivated(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineVacuumIsActivated';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineVacuumIsActivated)
        return result.rows[0].machineVacuumIsActivated;
      });
    }
  }

  public getMachineVacuumPressure(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineVacuumPressure';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineVacuumPressure)
        return result.rows[0].machineVacuumPressure;
      });
    }
  }
}

