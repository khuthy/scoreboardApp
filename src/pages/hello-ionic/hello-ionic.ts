import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private navCntrl: NavController) {

  }

  SecondPage() {
    this.navCntrl.push(HomePage);
  }
  
}
