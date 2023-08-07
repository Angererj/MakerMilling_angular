import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import {debounceTime, Subject} from "rxjs";
import {environment, setUserAuthenticated} from "../../environments/environments";
import {UserObject} from "../model/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //get httpclient, router
  constructor(private http: HttpClient,
              private router: Router) {
  }

  //get userurl from environment
  userUrl = environment.userUrl;
  //create new subject, delare variable
  errorMsgSubject = new Subject<string>();
  private fullName: any;

  setFullname(data: string): void {
    //set fullName
    this.fullName = data;
  }

  getFullname(): any {
    //get fullName
    return this.fullName;
  }

  //check if user is valid
  public checkUser(user: UserObject): any {
    const url = "https://thingworx.grandgarage.eu:8443/Thingworx/Things/JA_SE.MakerMillingMainStateMachine.Thing/Properties/globalMachineIsActive";
    const user_combined = window.btoa(user.username + ":" + user.password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // correct header name is 'Content-Type', not 'content-type'
      'Authorization': 'Basic ' + user_combined,
      'accept': 'application/json'
    });
    let httpOptions = {headers: headers /*, withCredentials: true */};

    this.http.get(url, httpOptions).subscribe({
      next: (result) => {
        //if returned user is valid, then set user authenticated in environment true, set userdata to user
        //return empty errormessage
        setUserAuthenticated(true);
        this.getUserData(user);
        this.errorMsgSubject.next("");
      },
      error: (error) => {
        //if user is invalid, then set user authenticated in environment false
        //return errormessage
        setUserAuthenticated(false);
        this.errorMsgSubject.next("Fehler: Überprüfe deine Anmeldedaten.");
      }
    });
  }

  //get userdata, pass result to subject
  getUserData(user: UserObject) {
    const url = this.userUrl + user.username + "/Properties/";
    const user_data_combined = window.btoa(user.username + ":" + user.password);
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Basic ' + user_data_combined,
      'accept': 'application/json'
    });
    this.http.get<any>(url, {'headers': headers}).pipe(debounceTime(10)).subscribe({
      next: (result) => {
        //sets fullname for sessions to logged in user and reformats thingworx name to valid username for query, if needed
        //if firstname and lastname are set in thingworx then it uses this as name for query
        let name = '';
        if(result.rows[0].firstName === '' || result.rows[0].lastName === ''){
          name = this.transformName(result.rows[0].name);
        }else {
          name = `${result.rows[0].firstName} ${result.rows[0].lastName}`;
        }
        //set name for user
        this.setFullname(name);
        //navigate to dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  //changes thingworx username format from "max.mustermann" to "Max Mustermann"
  transformName(name: string): string {
    const parts = name.split('.');
    if (parts.length !== 2) {
      throw new Error('Ungueltiges Format des Namens.');
    }

    const [firstName, lastName] = parts;
    const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return `${formattedFirstName} ${formattedLastName}`;
  }
}
