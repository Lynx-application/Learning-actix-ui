import { Component, OnInit } from '@angular/core';
import { TabsComponent } from "./tabs/tabs.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [TabsComponent]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    clientName: string = "AMIRHOSEIN"
    date: string = "Sun Nov 17 10:03PM"

    ngOnInit(): void { }
}