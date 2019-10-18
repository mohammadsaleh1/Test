import { Component } from '@angular/core';
import {Event,Router , NavigationStart,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  showload =true;
  constructor(private _route : Router){
   this._route.events.subscribe((routevent :Event)=>{
     if(routevent instanceof NavigationStart){
       this.showload=true;
     }
     if(routevent instanceof NavigationEnd){
      this.showload=false;
    }
   });
  }
}
