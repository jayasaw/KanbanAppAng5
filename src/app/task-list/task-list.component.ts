import { Component, OnInit } from '@angular/core';
import { DataService, TaskType } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'kbn-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: []
})
export class KbnTaskListComponent implements OnInit {
    constructor(private dataService: DataService) { }
    tasks: Observable<Array<TaskType>>;


    ngOnInit() {

        this.tasks = this.dataService.getTaskList();
    }

}
