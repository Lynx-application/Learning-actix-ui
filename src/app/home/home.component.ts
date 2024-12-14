import { Component, Input, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private service: PageService) {
        service.data.subscribe(value => {
            console.log([value]);
        })
    }

    @Input() page_content: Page;

    pre: string = "We're";
    title: string = "LYNX!";

    ngOnInit(): void { }
}

export interface Page {
    attributes: string[],
    description: string,
    pre: string,
    tabs: string[],
    title: string
}