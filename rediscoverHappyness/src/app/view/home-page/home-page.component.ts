import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDailogComponent } from '../feedback-dailog/feedback-dailog.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000, style({ opacity: 1}))
      ])
    ])
  ]
})


export class HomePageComponent implements OnInit {


  constructor(public dialog: MatDialog,    
    config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true; }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'black'
    })
    
    writer
      .type('We believe that we can over-come all the challenges in life, if we know the right path. ')
      .rest(500)
      .start()
  }

  newFeedback() {
    let dialogref = this.dialog.open(FeedbackDailogComponent, {
      // width: '800px',
    });
  }

}
