import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment, setUserAuthenticated} from "../../environments/environments";
import {UserObject} from "../model/user";
import {Router, RouterModule} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  baseUrl = environment.baseUrl;
  appKey = environment.appKey;
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
   var test = window.btoa(user.username+":"+user.password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // The correct header name is 'Content-Type', not 'content-type'
      'Authorization': 'Basic '+test,
      'accept': 'application/json'
    });
    let httpOptions = { headers: headers /*, withCredentials: true */ };

    // You don't need to pass the headers as a separate object in the post method
    // The headers should be directly passed as the third parameter
    try{
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
    }catch (err){
      console.log("Login fehlgeschlagen");
    }
  }
  getUserData(user:UserObject){
    const url = this.userUrl+user.username+"/Properties/";
    var test = window.btoa(user.username+":"+user.password);
    const headers= new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Basic '+test,
      'accept': 'application/json'});
    this.http.get<any>(url,{'headers': headers}).pipe(debounceTime(10)).subscribe(result => {
      this.setFullname(result.rows[0].firstName + " "+ result.rows[0].lastName)
        this.router.navigate(['/dashboard']);
    });
  }
}
