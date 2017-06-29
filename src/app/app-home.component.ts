import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'app-home.component.html',
    styleUrls:['app-home.component.scss'],
})

export class AppHomeComponent implements OnInit {
    appTitle: string;
    appDescription: string;
    isLoading: boolean;

    constructor() {
        this.appTitle = "Hello from Angular App with Webpack";
        this.appDescription = "An Angular and Sears Johnston production"
    }

    simulateLoad() {
        this.isLoading = true;

        setTimeout(() => {
            this.isLoading = false;
        }, 5000)
    }

    openHomepage(): void {
        window.open('https://github.com/johnston4hooah/webpack-angular-material');
    }

    ngOnInit() { }
}