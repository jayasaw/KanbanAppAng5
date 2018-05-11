import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
  kanbanList: Kanban[];
  constructor(private http: HttpClient) {
    this.kanbanList = [
      { name: 'New Tasks' },
      { name: 'On Hold' },
      { name: 'In Progress' },
      { name: 'Done' }
    ];
  }

  getKanbanList(): Observable<Kanban[]> {

    return Observable.create((observer) => {
      observer.next(this.kanbanList);
    });

  }

  addNewTaskList(task): any {
    const taskList = [];
    taskList.push(task);
  }

}

export interface Kanban {
  name: string;
}
