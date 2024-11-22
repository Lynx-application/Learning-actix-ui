import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent implements AfterContentChecked {
    constructor(private router: Router) { }

    image: string = "";
    pageData = {
        title: "", description: ""
    }

    private readonly portraits: string[] = [
        "assets/img/AmirhoseinMardani.png",
        "assets/img/AmirrezaRezaei.png",
        "assets/img/AmirZand.png",
    ]

    data = [
        {
            title: "Amirhosein Mardani",
            description: "Hey! I`m Amir. As an experienced full-stack developer, i'm dedicated to building precise effective solutions. I take a careful approach to every detail, always looking for ways to improve and growl see challenges as chances to learn, and i'm ready to face them. My ultimate goal is to be known for creating impactful solutions to complex problems with skills and creativity. With every project, I aimed to be someone who's known for building strong, lasting solutions that make a difference. I work hard to understand the needs of each project and bring my best ideas to the table. I focus on using both creativity and skill to solve problems in ways that will have a real, positive impact."
        },
        {
            title: "Amirreza Rezaei",
            description: "Amirreza is a curious mind who embraces every opportunity to explore new paths. From his first steps into the unknown, he has been driven by a love for learning and a desire to grow. He values every challenge as a chance to discover something new and exciting. Whether diving deep into solving puzzles or finding fresh ways to approach problems, he focuses on creativity and determination. His ultimate aim is to leave a mark by turning simple ideas into impactful achievements. With each step forward, Amirreza brings thoughtful energy, always aiming to make a positive difference. His journey is defined by a belief in growth, progress, and the endless potential of new horizons."
        },
        {
            title: "Amir Zand",
            description: "Amir Zand is a curious thinker who dives deep into understanding the essence of ideas. His journey has been all about uncovering patterns, building strong foundations, and seeking clarity in every challenge he faces. Like an explorer venturing into uncharted caves, Amir constantly pursues fresh insights, eager to expand his perspective. With each step, he sharpens his mind, treating every challenge as an opportunity to grow and evolve. Amir embraces the unknown with determination, pushing boundaries and uncovering truths that drive him forward. His dedication to discovering the depths of every concept makes his journey a fascinating one, fueled by curiosity and a drive for deeper understanding, creating a lasting impression wherever he ventures."
        }
    ]

    ngAfterContentChecked(): void {
        const id = +(this.router.url.split("/")[2]) - 1;
        this.image = this.portraits[id];
        this.pageData = this.data[id]
    }
}
