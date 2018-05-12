import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  public taskList: Array<TaskType> = [];

  constructor(private http: HttpClient) {
    this.taskList = [{ name: 'Hold' }, { name: 'In Progress' }, { name: 'Completed' }];
  }

  addNewTaskList(task: TaskType): void {

    this.taskList.push(task);
  }

  getTaskList(): Observable<Array<TaskType>> {
    return Observable.create((observer) => {
      observer.next(this.taskList);
    });

  }

}

export interface TaskType {
  name: string;
}



