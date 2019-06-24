import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  count: number;;
  count2: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.count = 0;
    this.count2 = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  firstOponent(){
    this.count++;
  }
  secondOponent(){
    this.count2++;
  }

  resetFunc() {
    this.count = 0;
    this.count2 = 0;
  }



}
