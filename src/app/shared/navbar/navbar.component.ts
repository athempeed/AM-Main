import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
      
    }
    sidebarOpen() {
		var elem = document.getElementById("sidebar-wrapper");
		var left = window.getComputedStyle(elem,null).getPropertyValue("left");
		if(left == "200px"){
			document.getElementsByClassName("sidebar-toggle")[0].setAttribute("style","left:-200px");
		}
		else if(left == "-200px"){
			document.getElementsByClassName("sidebar-toggle")[0].setAttribute("style","left:200px"); 
		}
      
    };
  
    sidebarToggle() {
        this.sidebarOpen();
    };

  
    
}
