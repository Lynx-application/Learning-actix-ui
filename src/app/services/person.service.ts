import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "process";
import { environment } from "../environment/environment";
import { Observable } from "rxjs";
import { Person } from "../person/person.component";

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private http: HttpClient) { }

    private readonly url = environment.apiUrl;

    getPerson(id: number): Observable<Person> {
        return this.http.get<Person>(this.url + 'person/' + id)
    }
}