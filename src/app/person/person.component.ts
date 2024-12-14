import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../services/person.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss'],
    providers: [PersonService],
    imports: [HttpClientModule]
})
export class PersonComponent {
    constructor(private activatedRoute: ActivatedRoute, private service: PersonService) {

        this.activatedRoute.params.subscribe(id => {


            this.service.getPerson(id['id']).subscribe(res => {
                console.log(1);

                this.data = res;
                this.image = this.portraits[id['id'] - 1];

            })
        });
    }

    private readonly portraits: string[] = [
        "assets/img/AmirhoseinMardani.png",
        "assets/img/AmirrezaRezaei.png",
        "assets/img/AmirZand.png",
    ]

    image: string = this.portraits[2];

    data: Person =
        {
            title: "Benjamin Franklin",
            description: "He was an American polymath: a leading writer, scientist, inventor, statesman, diplomat, printer, publisher and political philosopher.[1] Among the most influential intellectuals of his time, Franklin was one of the Founding Fathers of the United States; a drafter and signer of the Declaration of Independence; and the first postmaster general."
        }

}

export interface Person {
    title: string,
    description: string
}