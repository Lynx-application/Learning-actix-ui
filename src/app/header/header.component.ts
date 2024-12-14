import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { formatterDate } from '../services/date.service';
import { TabsComponent } from "./tabs/tabs.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [TabsComponent]
})
export class HeaderComponent implements AfterViewInit {

    constructor(private ngZone: NgZone) {
        this.ngZone.runOutsideAngular(() => {
            setInterval(() => {
                const now = new Date();
                let formattedDate = formatterDate(now);

                this.ngZone.run(() => {
                    this.date = formattedDate;
                });
            }, 1000);
        })
    }

    ngAfterViewInit(): void {
    }

    clientName: string = "AMIRHOSEIN"
    date: string = "Sun Nov 17 10:03PM"
}