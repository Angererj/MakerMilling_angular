import {Component, OnInit} from '@angular/core';
import {DatatableService} from "../service/datatable.service";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit{
constructor(private datatableService: DatatableService) {
}
ngOnInit() {
  this.datatableService.getDatatable();
}
}
