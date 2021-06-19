import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { feedback } from '../../model/feedback';
import { FeedBackService } from '../../services/feedback.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback-dailog',
  templateUrl: './feedback-dailog.component.html',
  styleUrls: ['./feedback-dailog.component.css']
})
export class FeedbackDailogComponent implements OnInit {

  firstNameText: any;
  emailText: any;
  mobileNumberText: any;
  addressText: any;

  constructor(   public dialogRef: MatDialogRef<FeedbackDailogComponent>,
            public feedbackService: FeedBackService) { }

  ngOnInit(): void {
  }

  onSubmit(feedbackForm: NgForm) {
    console.log(feedbackForm.value)
    const result = this.feedbackService.postFeedback(feedbackForm.value).then( success => {
      alert("Your Form is Submitted! We will contact you soon")
      feedbackForm.reset();
      this.dialogRef.close();
    })
  }

}
