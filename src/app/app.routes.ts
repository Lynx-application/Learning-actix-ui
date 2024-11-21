import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { ConactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'person/:id', component: PersonComponent },
    { path: 'contact', component: ConactComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
