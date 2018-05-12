import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'kbn-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class KbnTaskComponent implements OnInit {
    public taskName: string;
    constructor(private router: Router, private dataService: DataService) {

    }

    public goBack() {
        this.router.navigate(['taskList']);
    }

    public AddTaskList() {
        this.dataService.addNewTaskList({ name: this.taskName });
        this.router.navigate(['taskList']);

    }
    ngOnInit() {

    }
}
