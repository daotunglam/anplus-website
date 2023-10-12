import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'anplus';

    isHandset$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
            this.isHandset$.next(result.matches);
        });
    }

    @ViewChild('sidenav') sidenav!: MatSidenav;

    reason = '';

    toggle(reason: string) {
        this.reason = reason;
        this.sidenav.toggle();
    }
}
