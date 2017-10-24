import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiClientService {
    public githubUsername = 'hybris';
    public sortBy = 'created';

    public sortOptions = [
        { value: 'created', label: 'Created' },
        { value: 'updated', label: 'Updated' },
        { value: 'pushed', label: 'Pushed' },
        { value: 'full_name', label: 'Full Name' },
    ];

    constructor(private http: Http) {
        this.githubUsername = localStorage.interviewUsername || this.githubUsername;
        this.sortBy = localStorage.interviewSortBy || this.sortBy;
    }

    getRepositories() {
        const username = this.githubUsername;
        const sortBy = this.sortBy;
        const url = `https://api.github.com/users/${username}/repos?sort=${sortBy}`;
        return this.http.get(url)
            .map(response => response.json());
    }

    getContributors(repository: string) {
        const username = this.githubUsername;
        const url = `https://api.github.com/repos/${username}/${repository}/contributors`;
        return this.http.get(url)
            .map(response => response.json());
    }

    storeOptions(githubUsername: string, sortBy: string) {
        localStorage.interviewUsername = githubUsername;
        localStorage.interviewSortBy = sortBy;
    }
}
