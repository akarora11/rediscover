import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('fade', [
  //     transition('void => *', [
  //       style({ opacity: 0}),
  //       animate(2000, style({ opacity: 1}))
  //     ])
  //   ]),
  //   trigger('newfade', [
  //     transition('void => *', [style({ opacity: 0 }), animate('900ms', style({ opacity: 1 }))]),
  //     transition('* => void', [style({ opacity: 1 }), animate('900ms', style({ opacity: 0 }))]),
  //   ])
  // ]
})
export class AppComponent {
  title = 'rediscoverHappyness'
  // current = 0;
  // currentRoute = 0;
  // img_list = [
  //   '../assets/background_6_new.jpg',
  //   '../assets/background_2.jpeg',
  //   '../assets/background_8.jpg',
  // ];
}
