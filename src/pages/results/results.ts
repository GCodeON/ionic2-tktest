import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the Results page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var testResults = (this.navParams.get("test"));
    console.log(Math.round((testResults.Avoiding / 12) * 100));
    console.log('ionViewDidLoad ResultsPage');
    
    this.barChart = new Chart(this.barCanvas.nativeElement, {
     type: 'bar',
     data: {
       labels: [
           'Avoiding',
           'Accommodating',
           'Compromising',
           'Competing',
           'Collaborating'
         ],
       datasets: [{
         data: [
             Math.round((testResults.Avoiding / 12) * 100),
             Math.round((testResults.Accommodating / 12) * 100),
             Math.round((testResults.Compromising / 12) * 100),
             Math.round((testResults.Competing / 12) * 100),
             Math.round((testResults.Collaborating / 12) * 100)
         ],
         backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)'
         ],
         borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)'
         ],
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         yAxes: [{
           ticks: {
             beginAtZero:true,
             max: 100
           }
         }]
       },
       legend: {
         display: false
      },
      tooltips: {
         enabled: false
      }
     }
   });
    
  }

}
