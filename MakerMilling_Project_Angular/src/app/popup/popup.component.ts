import {Component, Input} from '@angular/core';
import {environment, setUserAuthenticated} from "../../environments/environments";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popup',
  template: `
    <div class="overlay">
      <div class="popup">
        <img height="20vw" routerLink="/dashboard" src="assets/gg-icon.svg" alt="GrandGarage"/><hr><br>
        <p>{{ errorMessage }}</p><br><br>
        <div class="popupButtons">
          <button mat-raised-button routerLink="/sessions" class="topStateDisplay-sessions" *ngIf="environment.userIsAuthenticated">Sessions</button>
          <button mat-raised-button color="warn" (click)="logOut()" *ngIf="environment.userIsAuthenticated" class="buttonLogout">Abmelden</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
      .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent gray background */
          display: flex;
          justify-content: center;
          align-items: center;
      }

      .popup {
          position: relative;
          background-color: white;
          border: 1px solid #ccc;
          padding: 60px;
      }

      .popupButtons{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
  `],
})
export class PopupComponent {
  //component placed on top of dashboard only loaded when globalmachineactive is false
  @Input() errorMessage: string = '';
  protected readonly environment = environment;

  constructor(private router: Router) {
  }


  //logout on button 'abmelden' clicked and userisathenticated false - navigate to login page
  logOut() {
    setUserAuthenticated(false);
    this.router.navigate(['/login']);
  }
}
