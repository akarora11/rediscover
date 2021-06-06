import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedBackService } from '../../services/feedback.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(1000, style({ opacity: 1}))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {

  fullNameText: any;
  emailText: any;
  phoneNumberText: any;
  addressText: any;
  messageText: any;

  constructor(private feedbackService: FeedBackService) { }

  ngOnInit(): void {
  }

  onSubmit(feedbackForm: NgForm) {
    console.log(feedbackForm.value)
    const result = this.feedbackService.postFeedback(feedbackForm.value).then( success => {
      alert("Your Form is Submitted! We will contact you soon")
      feedbackForm.reset();
    })
  }

}
