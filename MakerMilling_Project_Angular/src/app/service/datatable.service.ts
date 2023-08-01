import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject} from "rxjs";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  //get baseurl and appkey from environment, create new subject
  baseUrl = environment.baseUrl;
  appKey = environment.appKey;
  dataSubject = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  public getDatatable() {
    //only create datatable if user is authenticated
    if (environment.userIsAuthenticated){
      //set url, headers and httpoptions
      const url = this.baseUrl + 'JA_SE.MakerMillingSessionsTable.DataTable/Services/GetDataTableEntries';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json', // correct header name is 'Content-Type', not 'content-type'
        'appKey': this.appKey,
        'accept': 'application/json'
      });
      let httpOptions = {headers: headers /*, withCredentials: true */};

      //headers passed directly as third parameter in post, body empty
      this.http.post(url, null, httpOptions).subscribe({
        next: (result) => {
          //if datatable returned then write it to datasubject
          this.dataSubject.next(result)
        },
        error: (error) => {
          //errormessage
          console.error(error);
        }
      });
    }
  }
}
