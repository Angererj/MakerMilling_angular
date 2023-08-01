import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class MachineInformationService {
  //get baseurl, appkey from environment
  private baseUrl = environment.baseUrl
  private appKey = environment.appKey;

  //create new subjects
  machineType = new Subject<string>();
  machineNumber = new Subject<string>();
  machineLocation = new Subject<string>();
  machineFloor = new Subject<string>();
  machineSoftwareVersion = new Subject<string>();
  machineRequiresTraining = new Subject<string>();

  //get httpclient
  constructor(private http: HttpClient) {
  }

  //get machinetype, pass result to subject
  public getMachineType() {
    const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineType';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineType.next(result.rows[0].machineType);
    });
  }

  //get machinenumber, pass result to subject
  public getMachineNumber() {
    const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineNumber';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineNumber.next(result.rows[0].machineNumber);
    });
  }

  //get machinelocation, pass result to subject
  public getMachineLocation() {
    const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineLocation';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineLocation.next(result.rows[0].machineLocation);
    });
  }

  //get machinefloor, pass result to subject
  public getMachineFloor() {
    const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineOnFloor';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineFloor.next(result.rows[0].machineOnFloor);
    });
  }

  //get softwareversion, pass result to subject
  public getMachineSoftwareVersion() {
    const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/machineNextSoftwareVersion';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineSoftwareVersion.next(result.rows[0].machineNextSoftwareVersion);
    });
  }

  //get trainingisrequired, pass result to subject
  public getMachineRequiresTraining() {
    const url = this.baseUrl + 'JA_SE.MakerMillingInformations.Thing/Properties/requiresTraining';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineRequiresTraining.next(result.rows[0].requiresTraining);
    });
  }
}
