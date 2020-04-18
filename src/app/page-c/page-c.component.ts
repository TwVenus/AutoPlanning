import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})
export class PageCComponent implements OnInit {
    container: any;
    public data: Object[];
    public taskfield: Object; 
    constructor() { }

  ngOnInit(): void {
    this.data = [{
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
        { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30 },
        { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
        { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'),
        Duration: 3, Predecessor: '2', Progress: 30
        },
        ]
        }, 
        { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4' },]; 
        this.taskfield = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        child: 'subtasks'
        };
  }
}
