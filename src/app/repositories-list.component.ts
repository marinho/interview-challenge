import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ApiClientService } from './api-client.service';

@Component({
    selector: 'repositories-list',
    templateUrl: 'repositories-list.component.html'
})
export class RepositoriesListComponent implements OnInit {
    repos$: Observable<any>;

    constructor(public api: ApiClientService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        this.repos$ = this.api.getRepositories();
    }
}
