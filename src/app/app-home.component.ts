import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
    selector: 'app-home',
    templateUrl: 'app-home.component.html',
    styleUrls:['app-home.component.scss'],
})

export class AppHomeComponent implements OnInit {
    appTitle: string;
    appDescription: string;
    isLoading: boolean;

    constructor(private appService: AppService) {
        this.appTitle = "Hello from Angular App with Webpack";
        this.appDescription = "An Angular and Sears Johnston production"

        this.appService.contentTitle = "Application Information";
        this.appService.contentTitleColor = "primary";
    }

    simulateLoad() {
        this.appService.simulateLoad();
    }

    openHomepage(): void {
        window.open('https://github.com/johnston4hooah/webpack-angular-material');
    }

    ngOnInit() { }
}