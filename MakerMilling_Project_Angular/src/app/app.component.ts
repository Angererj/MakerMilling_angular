import {Component, HostListener} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maker Milling';
  shouldShowHeader: boolean = false;
  allowedPages: string[] = ['/sessions', '/dashboard']; // Add the routes of the pages where you want to show the header

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.shouldShowHeader = this.allowedPages.includes(event.url); // Check if the current route is in the list of allowed pages
      }
    });
  }

}
