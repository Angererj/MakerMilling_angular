import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class MachineCurrentToolService {
  //get baseurl, appkey from environment
  private baseUrl: string = environment.baseUrl;
  private appKey: string = environment.appKey;

  //implement subjects
  toolArticleNumber = new Subject<string>();
  toolDominatingProperty = new Subject<string>();
  toolImageUrl = new Subject<string>();
  toolDescription = new Subject<string>();
  toolName = new Subject<string>();

  //get httpclient
  constructor(private http: HttpClient) {
  }

  //get toolarticlenumber, pass result to subject
  public getToolArticleNumber() {
    const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/articleNumber';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.toolArticleNumber.next(result.rows[0].articleNumber);
    });
  }

  //get tooldominatingproperty, pass result to subject
  public getToolDominatingProperty() {
    const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/dominatingProperty';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.toolDominatingProperty.next(result.rows[0].dominatingProperty);
    });
  }

  //get toolimageurl, pass result to subject
  public getToolImageUrl() {
    const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/imageUrl';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.toolImageUrl.next(result.rows[0].imageUrl);
    });
  }

  //get tooldescription, pass result to subject
  public getToolDescription() {
    const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/toolDescription';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.toolDescription.next(result.rows[0].toolDescription);
    });
  }

  //get toolname, pass result to subject
  public getToolName() {
    const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/toolName';
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.toolName.next(result.rows[0].toolName);
    });
  }
}
