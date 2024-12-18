import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PageService } from '../../services/page.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    imports: [HttpClientModule, RouterLink],
    providers: [PageService],
})
export class TabsComponent implements OnInit, AfterContentChecked {

    constructor(private router: Router, private service: PageService) {
        service.data.subscribe(value => {
            console.log(value);

            this.tabs = value.tabs
        })
    }

    tabs: string[] = ["Benjamin Franklin", "Amir Parsi", "Rohallah Khomeini"]

    ngAfterContentChecked(): void {
        switch (this.router.url) {
            case "/home":
                this.activeMap = [true, false, false, false, false]
                break;
            case "/person/1":
                this.activeMap = [false, true, false, false, false]
                break;
            case "/person/2":
                this.activeMap = [false, false, true, false, false]
                break;
            case "/person/3":
                this.activeMap = [false, false, false, true, false]
                break;
            case "/contact":
                this.activeMap = [false, false, false, false, true]
                break;

            default:
                break;
        }
    }

    activeMap: boolean[] = [true, false, false, false, false]

    ngOnInit(): void { }
}
