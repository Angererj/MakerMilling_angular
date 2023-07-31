import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class MachineCurrentToolService {

  private baseUrl:string = environment.baseUrl;
  private appKey:string= environment.appKey;

  toolArticleNumber = new Subject<string>();
  toolDominatingProperty = new Subject<string>();
  toolImageUrl = new Subject<string>();
  toolDescription = new Subject<string>();
  toolName = new Subject<string>();

  constructor(private http: HttpClient) {}

  public getToolArticleNumber(){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/articleNumber';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        this.toolArticleNumber.next(result.rows[0].articleNumber);
      });
  }

  public getToolDominatingProperty(){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/dominatingProperty';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        this.toolDominatingProperty.next(result.rows[0].dominatingProperty);
      });
  }

  public getToolImageUrl(){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/imageUrl';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        this.toolImageUrl.next(result.rows[0].imageUrl);
      });
  }

  public getToolDescription(){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/toolDescription';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        this.toolDescription.next(result.rows[0].toolDescription);
      });
  }

  public getToolName(){
      const url = this.baseUrl + 'JA_SE.MakerMillingCurrentTool.Thing/Properties/toolName';
      const headers= new HttpHeaders({
        'content-type': 'application/json',
        'appKey': this.appKey,
        'accept': 'application/json'});
      this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
        this.toolName.next(result.rows[0].toolName);
      });
  }
}
