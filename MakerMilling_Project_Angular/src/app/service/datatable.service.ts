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
   dataEntries = [];

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
          //if datatable returned then write it to datasubject and sort it ascending
          // @ts-ignore
          this.dataEntries=this.sortSessions(result.rows);
          this.dataEntries.reverse();
          this.dataSubject.next(this.dataEntries);
        },
        error: (error) => {
          //errormessage
          console.error(error);
        }
      });

    }
  }
  sortSessions(result: any) {
    const loop = result.length;

    for(let i = 0; i < loop; i++) {
      for(let j = i+1; j < loop; j++) {
        if(new Date(result[i].key) > new Date(result[j].key)) {
          let temp = result[i];
          result[i] = result[j];
          result[j] = temp;
        }
      }
    }
    return result;
  }
}
