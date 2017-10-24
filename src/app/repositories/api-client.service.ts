import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiClientService {
    // TODO: replace these githubUsername and githubUsername by route query params
    public githubUsername = 'hybris';
    public sortBy = 'created';

    public sortOptions = [
        { value: 'created', label: 'Created' },
        { value: 'updated', label: 'Updated' },
        { value: 'pushed', label: 'Pushed' },
        { value: 'full_name', label: 'Full Name' },
    ];

    constructor(private http: Http) {
        // TODO: replace these githubUsername and githubUsername by route query params
        this.githubUsername = localStorage.interviewUsername || this.githubUsername;
        this.sortBy = localStorage.interviewSortBy || this.sortBy;
    }

    getRepositories() {
        // TODO: declare arguments username and sortBy for this function instead of using attributes
        const username = this.githubUsername;
        const sortBy = this.sortBy;
        const url = `https://api.github.com/users/${username}/repos?sort=${sortBy}`;
        return this.http.get(url)
            .map(response => response.json());
    }

    getContributors(repository: string) {
        // TODO: declare argument username for this function instead of using attribute
        const username = this.githubUsername;
        const url = `https://api.github.com/repos/${username}/${repository}/contributors`;
        return this.http.get(url)
            .map(response => response.json());
    }

    storeOptions(githubUsername: string, sortBy: string) {
        // TODO: replace this method by calling URL with new values as query params
        localStorage.interviewUsername = githubUsername;
        localStorage.interviewSortBy = sortBy;
    }
}
