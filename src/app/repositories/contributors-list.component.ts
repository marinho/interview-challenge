import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ApiClientService } from './api-client.service';

@Component({
    selector: 'contributors-list',
    templateUrl: 'contributors-list.component.html'
})

export class ContributorsListComponent implements OnInit {
    public repositoryName: string;
    public contributors$: Observable<any>;

    constructor(public api: ApiClientService,
        private activatedRoute: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.repositoryName = params.repository;
            this.contributors$ = this.api.getContributors(params.repository);
        });
    }
}
