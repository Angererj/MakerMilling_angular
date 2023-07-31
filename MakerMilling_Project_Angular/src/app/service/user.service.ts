import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {catchError, debounceTime, Observable, of, Subject, throwError} from "rxjs";
import {environment, setUserAuthenticated} from "../../environments/environments";
import {UserObject} from "../model/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  userUrl = environment.userUrl;
  errorMsgSubject = new Subject<string>();
  private fullname: any;

  setFullname(data: string): void {
    this.fullname = data;
  }

  getFullname(): any {
    return this.fullname;
  }

  public checkUser(user: UserObject): any{
    const url = "https://thingworx.grandgarage.eu:8443/Thingworx/Things/JA_SE.MakerMillingMainStateMachine.Thing/Properties/globalMachineIsActive";
    const user_combined = window.btoa(user.username+":"+user.password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // The correct header name is 'Content-Type', not 'content-type'
      'Authorization': 'Basic ' + user_combined,
      'accept': 'application/json'
    });
    let httpOptions = { headers: headers /*, withCredentials: true */ };

    // You don't need to pass the headers as a separate object in the post method
    // The headers should be directly passed as the third parameter
      this.http.get(url,  httpOptions).subscribe(
        (result) => {
          setUserAuthenticated(true);
          this.getUserData(user);
          this.errorMsgSubject.next("");
        },
        (error) => {
          setUserAuthenticated(false);
          this.errorMsgSubject.next("Fehler: Überprüfe deine Anmeldedaten.");
        }
      );
  }

  getUserData(user:UserObject){
    const url = this.userUrl+user.username+"/Properties/";
    const user_data_combined = window.btoa(user.username+":"+user.password);
    const headers= new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Basic ' + user_data_combined,
      'accept': 'application/json'});
    this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.setFullname(result.rows[0].firstName + " "+ result.rows[0].lastName);
      this.router.navigate(['/dashboard']);
    });
  }



}
