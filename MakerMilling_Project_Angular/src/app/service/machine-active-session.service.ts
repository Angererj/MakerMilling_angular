import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MachineMainStateService} from "./machine-main-state.service";
import {debounceTime} from "rxjs";
import {environment} from "../../environments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class MachineActiveSessionService {

  private baseUrl:string = environment.baseUrl;
  private appKey:string=environment.appKey

  constructor(private http: HttpClient,) {

  }

  public getLoggedInSince(){
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

  public getLoggedInUserName(){
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

  public getMachineActivatedProgramName(){
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

  public getMachineActivatedProgramDirectory(){
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
  public getMachineActivatedProgramExecutionTime(){
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

  public getMachineActivatedProgramExecutionTimeLeft(){
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

  public getMachineActivatedProgramPreviewImage(){
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

  public getMachineActivatedProgramProgress(){
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

  public getMachineActivatedProgramType(){
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
