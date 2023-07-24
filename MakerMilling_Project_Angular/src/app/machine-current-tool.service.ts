import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MachineMainStateService} from "./machine-main-state.service";
import {debounceTime} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MachineCurrentToolService {

  private baseUrl:string;
  private appKey:string;

  constructor(private http: HttpClient, private machineMainStateService: MachineMainStateService) {
    this.baseUrl = this.machineMainStateService.baseUrl;
    this.appKey = this.machineMainStateService.appKey;
  }

  public getToolArticleNumber(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/articleNumber';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].articleNumber)
        return result.rows[0].articleNumber;
      });
    }
  }

  public getToolDominatingProperty(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/dominatingProperty';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].dominatingProperty)
        return result.rows[0].dominatingProperty;
      });
    }
  }

  public getToolImageUrl(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/imageUrl';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].imageUrl)
        return result.rows[0].imageUrl;
      });
    }
  }

  public getToolDescription(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/toolDescription';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].toolDescription)
        return result.rows[0].toolDescription;
      });
    }
  }

  public getToolName(){
    if(this.machineMainStateService.globalMachineState){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/toolName';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].toolName)
        return result.rows[0].toolName;
      });
    }
  }
}
