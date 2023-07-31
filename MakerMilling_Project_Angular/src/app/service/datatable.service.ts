import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment} from "../../environments/environments";
import {SessionObject} from "../model/session";

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  baseUrl = environment.baseUrl;
  appKey = environment.appKey;
  dataSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getDatatable() {
    const url = this.baseUrl + 'JA_SE.MakerMillingSessionsTable.DataTable/Services/GetDataTableEntries';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // The correct header name is 'Content-Type', not 'content-type'
      'appKey': this.appKey,
      'accept': 'application/json'
    });
    let httpOptions = { headers: headers /*, withCredentials: true */ };

    // You don't need to pass the headers as a separate object in the post method
    // The headers should be directly passed as the third parameter
    this.http.post(url, null, httpOptions).subscribe(
      (result) => {
        this.dataSubject.next(result)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
