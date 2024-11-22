import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ConactComponent implements OnInit {
    constructor() { }

    messages = [
        { sender: "Amirhosein Mardani", content: "Hello!" },
        { sender: "AmirZand", content: "Hi" },
        { sender: "Amirreza Rezaei", content: "Hey guys!" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
        { sender: "Amirreza Rezaei", content: "How's the day?" },
    ]

    ngOnInit(): void { }
}
