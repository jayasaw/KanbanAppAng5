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
    public taskName: object;
    constructor(private router: Router, private dataService: DataService) { }

    public goBack() {
        this.router.navigate(['taskList']);
    }
    public AddTaskList(task) {
        this.dataService.addNewTaskList(task)
            .subscribe()
    }
    ngOnInit() {
        // this.goBack();
    }
}

