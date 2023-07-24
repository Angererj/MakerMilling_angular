import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MachineMainStateService {

  constructor(private http: HttpClient) { }

  public getGlobalMachineIsActive() {
    const url = 'https://thingworx.grandgarage.eu:8443/Thingworx/Things/JA_SE.MakerMillingMainStateMachine.Thing/Properties/globalMachineIsActive';
    const headers= new HttpHeaders({
      'content-type': 'application/json',
      'appKey': 'b808ec2f-d9df-4671-adb6-a17c88943440',
      'accept': 'application/json'});
    this.http.get(url,{'headers': headers}).subscribe(result => {
      console.log(result)
      return result;
    });
  }

}
