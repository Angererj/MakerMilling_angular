import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class MachineStateService {
  //baseurl, appkey from environment
  private baseUrl: string = environment.baseUrl
  private appKey: string = environment.appKey;

  //create new subjects
  tankPressureInput = new Subject<string>();
  tankPressureOutput = new Subject<string>();
  fabmanIsActive = new Subject<string>();
  machineRuntimeCombined = new Subject<string>();
  lastNotificationMessage = new Subject<string>();
  lastNotificationType = new Subject<string>();
  liveCameraFeedUrl = new Subject<string>();
  machineTank1Empty = new Subject<string>();
  machineTank2 = new Subject<string>();
  machineIsActive = new Subject<string>();
  machineExecutionState = new Subject<string>();
  machineStatusLight = new Subject<string>();
  machineVacuumIsActivated = new Subject<string>();
  machineVacuumPressure = new Subject<string>();

  //get httpclient
  constructor(private http: HttpClient) {
  }

  //get fabman is active, pass result to subject
  public getFabmanIsActive() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/fabmanIsActive';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.fabmanIsActive.next(result.rows[0].fabmanIsActive);
    });
  }

  //get runtimecombined, pass result to subject
  public getRuntimeCombined() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/formattedRuntimeCombined';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineRuntimeCombined.next(result.rows[0].formattedRuntimeCombined);
    });
  }

  //get lastnotificationmessage, pass result to subject
  public getLastNotificationMessage() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/latestNotificationMessage';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.lastNotificationMessage.next(result.rows[0].latestNotificationMessage);
    });
  }

  //get lastnotificationtype, pass result to subject
  public getLastNotificationType() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/latestNotificationType';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.lastNotificationType.next(result.rows[0].latestNotificationType);
    });
  }

  //get livecameraUrl, pass result to subject
  public getLiveFeedImageUrl() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/liveFeedImageUrl';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.liveCameraFeedUrl.next(result.rows[0].liveFeedImageUrl);
    });
  }

  //get machineisactive, pass result to subject
  public getMachineIsActive() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineIsActive';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineIsActive.next(result.rows[0].machineIsActive);
    });
  }

  //get spraysystemtank, pass result to subject
  public getSpraySystemTank1Empty() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineSpraysystemTank1Empty';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineTank1Empty.next(result.rows[0].machineSpraysystemTank1Empty);
    });
  }

  //get spraysystemtank2, pass result to subject
  public getSpraySystemTank2() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineSpraySystemTank2';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineTank2.next(result.rows[0].machineSpraySystemTank2);
    });
  }

  //get executionstate, pass result to subject
  public getMachineExecutionState() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineState';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineExecutionState.next(result.rows[0].machineState);
    });
  }

  //get machinestatuslight, pass result to subject
  public getMachineStatusLight() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/rgbStringVuforia';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineStatusLight.next(result.rows[0].rgbStringVuforia);
    });
  }

  //get tankpressureinput, pass result to subject
  public getMachineTankPressureInput() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineTankPressureInput';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.tankPressureInput.next(result.rows[0].machineTankPressureInput);
    });
  }

  //get tankpressureoutput, pass result to subject
  public getMachineTankPressureOutput() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineTankPressureOutput';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.tankPressureOutput.next(result.rows[0].machineTankPressureOutput);
    });
  }

  //get vacuumisactivated, pass result to subject
  public getMachineVacuumIsActivated() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineVacuumIsActivated';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineVacuumIsActivated.next(result.rows[0].machineVacuumIsActivated);
    });
  }

  //get vacuumpressure, pass result to subject
  public getMachineVacuumPressure() {
    const url = this.baseUrl + 'JA_SE.MakerMillingMachineState.Thing/Properties/machineVacuumPressure';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.machineVacuumPressure.next(result.rows[0].machineVacuumPressure);
    });
  }
}
