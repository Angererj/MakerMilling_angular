import {Injectable} from '@angular/core';
import {MachineMainStateService} from "./machine-main-state.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment} from "../../environments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class MachineInformationService{

  private baseUrl= environment.baseUrl
  private appKey = environment.appKey;

  machineName= new Subject<string>();
constructor(private http: HttpClient) {
}

  public getMachineType(){
      const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineType';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {

        this.machineName.next(  result.rows[0].machineType);
      });

  }

  public getMachineNumber(){
      const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineNumber';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineNumber)
        return result.rows[0].machineNumber;
      });

  }

  public getMachineLocation() {
    const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineLocation';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      //console.log(result.rows[0].machineLocation)
      return result.rows[0].machineLocation;
    });
  }

  public getMachineFloor(){
      const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineOnFloor';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineOnFloor)
        return result.rows[0].machineOnFloor;
      });

  }

  public getMachineSoftwareVersion(){
      const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineNextSoftwareVersion';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].machineNextSoftwareVersion)
        return result.rows[0].machineNextSoftwareVersion;
      });
  }

  public getMachineRequiresTraining(){

      const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/requiresTraining';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        //console.log(result.rows[0].requiresTraining)
        return result.rows[0].requiresTraining;
      });

  }

}
