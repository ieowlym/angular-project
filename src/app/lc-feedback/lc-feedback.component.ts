import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataService } from "../data/data.service";
import { Requests } from "../data/requests";

@Component({
    selector: 'lc-feedback',
    templateUrl: './lc-feedback.component.html',
    styleUrls: ['../app.component.css', 'lc-feedback.component.css'],
})
export class FeedbackComponent implements OnChanges {
  @Input() showForm: boolean = false;
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  requestInfo: Requests = {
    name: null,
    company: null,
    email: null,
    message: null
  }

  allRequests: Requests[] = [];

  constructor(private dataService: DataService){}

  onSubmit(form: NgForm) {
    console.log('on submit: ', form.valid);
    this.dataService.postRequests(this.requestInfo).subscribe(
      result => console.log('success: ',result),
      error => console.log('error: ', error)
    );
  }

  ngOnChanges(): void {
  }
  onClick(): void {
    this.closeForm.emit(false);
  }
}