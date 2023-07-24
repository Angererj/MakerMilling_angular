import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MachineMainStateService} from "./machine-main-state.service";
import {debounceTime, Subject} from "rxjs";
import {environment} from "../../environments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class MachineStateService {

  private baseUrl:string = environment.baseUrl
  private appKey:string = environment.appKey;
  tankPressureInput= new Subject<string>();
  constructor(private http: HttpClient) {

  }

  public getFabmanIsActive(){
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

  public getRuntimeCombined(){
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

  public getLastNotificationMessage(){
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

  public getLastNotificationType(){
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

  public getLiveFeedImageUrl(){
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

  public getMachineIsActive(){
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

  public getSpraySystemTank1Empty(){
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

  public getSpraySystemTank2(){
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

  public getMachineExecutionState(){
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

  public getMachineStatusLight(){
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

  public getMachineTankPressureInput(){
      const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineTankPressureInput';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineTankPressureInput)
        this.tankPressureInput.next(result.rows[0].machineTankPressureInput);
      });

  }

  public getMachineTankPressureOutput(){
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

  public getMachineVacuumIsActivated(){
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

  public getMachineVacuumPressure(){
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

