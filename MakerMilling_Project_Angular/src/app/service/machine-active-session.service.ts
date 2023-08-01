import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class MachineActiveSessionService {

  //get baseurl and appkey from environment
  private baseUrl: string = environment.baseUrl;
  private appKey: string = environment.appKey

  //create new subjects
  loggedInSince = new Subject<string>();
  loggedInUser = new Subject<string>();
  activeProgramName = new Subject<string>();
  activeProgramDirectory = new Subject<string>();
  activeProgramExecutionTime = new Subject<string>();
  activeProgramExecutionTimeLeft = new Subject<string>();
  activeProgramType = new Subject<string>();
  activeProgramPreviewImage = new Subject<string>();
  activeProgramProgress = new Subject<string>();

  //get httpclient
  constructor(private http: HttpClient) {
  }

  //get loggedinsince
  public getLoggedInSince() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/loggedInSince';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.loggedInSince.next(result.rows[0].loggedInSince);
    });
  }

  //get loggedinusername, pass result to subject
  public getLoggedInUserName() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/loggedInUserName';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.loggedInUser.next(result.rows[0].loggedInUserName);
    });
  }

  //get activeprogramname, pass result to subject
  public getMachineActivatedProgramName() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramName';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.activeProgramName.next(result.rows[0].machineActivatedProgramName);
    });
  }

  //get activeprogramdirectory, pass result to subject
  public getMachineActivatedProgramDirectory() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramDirectory';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.activeProgramDirectory.next(result.rows[0].machineActivatedProgramDirectory);
    });
  }

  //get activeprogramexecutiontime, pass result to subject
  public getMachineActivatedProgramExecutionTime() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramExecutionTime';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.activeProgramExecutionTime.next(result.rows[0].machineActivatedProgramExecutionTime);
    });
  }

  //get activeprogramtimeleft, pass result to subject
  public getMachineActivatedProgramExecutionTimeLeft() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramExecutionLeftTime';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.activeProgramExecutionTimeLeft.next(result.rows[0].machineActivatedProgramExecutionLeftTime);
    });
  }

  //get activeprogrampreviewimage, pass result to subject
  public getMachineActivatedProgramPreviewImage() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramPreviewImage';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.activeProgramPreviewImage.next(result.rows[0].machineActivatedProgramPreviewImage);
    });
  }

  //get activeprogramprogress in percent, pass result to subject
  public getMachineActivatedProgramProgress() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramProgressRounded';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.activeProgramProgress.next(result.rows[0].machineActivatedProgramProgressRounded);
    });
  }

  //get activeprogramtype, pass result to subject
  public getMachineActivatedProgramType() {
    const url = this.baseUrl + 'JA_SE.MakerMillingActivatedSession.Thing/Properties/machineActivatedProgramType';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.activeProgramType.next(result.rows[0].machineActivatedProgramType);
    });
  }
}
