import { Component,OnInit,Inject } from '@angular/core';
//import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector:'app-contact',
    templateUrl:'./contact.component.html',
    styleUrls:['./contact.component.scss']
})

export class ContactComponent implements OnInit{

    constructor(){}
    ngOnInit(){
        
        // var navbar = document.getElementById('navbar');
        // navbar.classList.remove('navbar-transparent');
    }
}