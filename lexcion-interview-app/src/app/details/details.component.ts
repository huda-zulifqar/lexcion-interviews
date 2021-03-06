import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewDataService } from '../interview-data.service';

@Component({
  selector: 'lexi-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
})
export class DetailsComponent implements OnInit {
  details: any;
  constructor(
    private interview: InterviewDataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      const idStr = param['id'];
      const idNum = parseInt(idStr);
      this.getInterviewById(idNum);
    });

    console.log('i am getting data', this.details);
  }

  getInterviewById(id: any) {
    const resp = this.interview.getInterviewById(id);
    resp.subscribe((data) => {
      console.log('Data after afdsdgfsdfaer:: ', data);
      this.details = data;
    });
  }
}
