import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MachineMainStateService implements OnInit{

  private _baseUrl: string = "https://thingworx.grandgarage.eu:8443/Thingworx/Things/";

  private _appKey:string = 'b808ec2f-d9df-4671-adb6-a17c88943440';

  private _globalMachineState: boolean = false;

  get baseUrl(): string {
    return this._baseUrl;
  }

  get appKey(): string {
    return this._appKey;
  }
  get globalMachineState(): boolean {
    this.getGlobalMachineIsActive();
    return this._globalMachineState;
  }

  constructor(private http: HttpClient) { }


  public getGlobalMachineIsActive() {
    console.log("Test")
    const url = this._baseUrl + 'JA_SE.MakerMillingMainStateMachine.Thing/Properties/globalMachineIsActive';
    const headers= new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this._appKey,
      'accept': 'application/json'});
    this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      console.log(result.rows[0].globalMachineIsActive)

      if(result.rows[0].globalMachineIsActive){
        console.log("test true")
          this._globalMachineState = true;
          return;
        }else {
        console.log("test false")
          this._globalMachineState = false;
          return;
        }
    });
  }

  ngOnInit() {
    setInterval(this.getGlobalMachineIsActive, 5000);
  }

}
