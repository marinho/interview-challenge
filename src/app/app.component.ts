import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiClientService } from './api-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public api: ApiClientService) {
  }

  ngOnInit() {
  }
}
