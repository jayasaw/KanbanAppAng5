import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KbnTaskComponent } from '../task/task.component';
import { KbnTaskListComponent } from '../task-list/task-list.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: '/taskList', pathMatch: 'full' },
    { path: 'task', component: KbnTaskComponent },
    { path: 'taskList', component: KbnTaskListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule],
    declarations: []

})
export class KbnRouterModule { }

