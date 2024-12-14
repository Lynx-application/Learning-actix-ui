import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment/environment";
import { Observable } from "rxjs";
import { Page } from "../home/home.component";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PageService {

    constructor(private http: HttpClient) {
        this.getPerson().subscribe(res => {
            this.data.next(res)
        })
    }

    private readonly url = environment.apiUrl;

    public data: BehaviorSubject<Page> = new BehaviorSubject<Page>({
        attributes: [],
        description: "",
        pre: "",
        tabs: [],
        title: "",
    });

    getPerson(): Observable<Page> {
        return this.http.get<Page>(this.url + 'page')
    }
}