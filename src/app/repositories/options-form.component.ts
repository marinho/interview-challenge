import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiClientService } from './api-client.service';

@Component({
    selector: 'options-form',
    templateUrl: 'options-form.component.html'
})

export class OptionsFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
                public api: ApiClientService) { }

    ngOnInit() {
        this.form = this.fb.group({
            githubUsername: [this.api.githubUsername],
            sortBy: [this.api.sortBy]
        })
    }

    updateForm() {
        this.api.storeOptions(this.form.value['githubUsername'], this.form.value['sortBy']);

        this.api.githubUsername = this.form.value['githubUsername'];
        this.api.sortBy = this.form.value['sortBy'];

        window.location.reload();
    }
}
