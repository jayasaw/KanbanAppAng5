import { Component, OnInit } from '@angular/core';
import { DataService, Kanban } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'kbn-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {

  public dataList: Observable<Kanban[]>;
  public show: boolean;
  constructor(private dataService: DataService) { }

  public fetchData() {
    // this.dataService.getKanbanList()
    //   .subscribe(data => { this.dataList = data; });
  }

  ngOnInit() {
    // this.fetchData();

    this.dataList = this.dataService.getKanbanList();
  }

 

}
