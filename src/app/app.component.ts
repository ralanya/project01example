import { Component } from '@angular/core';
declare var $:any;
declare function initSpinner({}):any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project01';
  constructor(){
    setTimeout(() => {
      initSpinner($);
    }, 50);
  }
}
